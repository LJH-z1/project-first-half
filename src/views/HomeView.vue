<template>
  <div class="home">
    <!-- Filters and pagination controls -->
    <div class="flex justify-between items-center mb-6">
      <NewsFilter 
        :current-filter="currentFilter"
        @filter-change="handleFilterChange"
      />
      
      <div class="flex items-center space-x-4">
        <label class="text-sm font-medium text-gray-700">Items per page:</label>
        <select 
          v-model="itemsPerPage" 
          class="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="5">5 items</option>
          <option value="10">10 items</option>
          <option value="20">20 items</option>
        </select>
      </div>
    </div>

    <!-- News list -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NewsCard 
        v-for="news in paginatedNews"
        :key="news.id"
        :news="news"
        @click="goToDetail(news.id)"
      />
    </div>

    <!-- Pagination -->
    <Pagination
      :current-page="currentPage"
      :total-items="filteredNews.length"
      :items-per-page="itemsPerPage"
      @page-change="handlePageChange"
      class="mt-8"
    />

    <!-- Empty state -->
    <div v-if="filteredNews.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No news found matching your criteria</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useNewsStore } from '../stores/news'
import NewsCard from '../components/NewsCard.vue'
import NewsFilter from '../components/NewsFilter.vue'
import Pagination from '../components/Pagination.vue'

const router = useRouter()
const newsStore = useNewsStore()

const props = defineProps<{
  page?: number
  filter?: string
}>()

const itemsPerPage = ref(5)
const currentPage = ref(props.page || 1)
const currentFilter = ref(props.filter || 'all')

const filteredNews = computed(() => newsStore.filteredNews)

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * parseInt(itemsPerPage.value.toString())
  const end = start + parseInt(itemsPerPage.value.toString())
  return filteredNews.value.slice(start, end)
})

const handleFilterChange = (filter: string) => {
  newsStore.filterNews(filter as any)
  currentPage.value = 1
  updateURL()
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  updateURL()
}

const goToDetail = (id: number) => {
  router.push({ name: 'news-detail', params: { id } })
}

const updateURL = () => {
  router.push({
    name: 'home',
    query: {
      page: currentPage.value,
      filter: props.filter
    }
  })
}

// Initialize filtering
watch(() => props.filter, (newFilter) => {
  if (newFilter) {
    newsStore.filterNews(newFilter as any)
  }
}, { immediate: true })
</script>