<template>
  <div v-if="news" class="news-detail">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        v-if="news.imageUrl" 
        :src="news.imageUrl" 
        :alt="news.title"
        class="w-full h-64 object-cover"
      >
      
      <div class="p-6">
        <!-- Status and date -->
        <div class="flex justify-between items-start mb-4">
          <span 
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              statusClasses[news.status]
            ]"
          >
            {{ statusText[news.status] }}
          </span>
          <span class="text-sm text-gray-500">{{ news.date }} at {{ news.time }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ news.title }}</h1>
        
        <!-- Full description -->
        <div class="prose max-w-none mb-6">
          <p class="text-gray-700 leading-relaxed">{{ news.fullDescription }}</p>
        </div>

        <!-- Reporter and vote statistics -->
        <div class="flex justify-between items-center border-t border-gray-200 pt-4">
          <div class="text-sm text-gray-600">
            Reported by: <span class="font-medium">{{ news.reporter }}</span>
          </div>
          <div class="flex space-x-6 text-sm">
            <span class="text-red-500 font-medium">👎 {{ news.voteCount.fake }} Fake votes</span>
            <span class="text-green-500 font-medium">👍 {{ news.voteCount.real }} Real votes</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="mt-6 flex space-x-4">
          <RouterLink 
            :to="{ name: 'vote', params: { id: news.id } }"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Vote & Comment
          </RouterLink>
          <RouterLink 
            to="/"
            class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to News List
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500 text-lg">News not found</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '../stores/news'

const route = useRoute()
const newsStore = useNewsStore()

const newsId = parseInt(route.params.id as string)

const news = computed(() => 
  newsStore.news.find(item => item.id === newsId)
)

const statusText = {
  fake: 'Fake News',
  real: 'Real News',
  pending: 'Under Review'
}

const statusClasses = {
  fake: 'bg-red-100 text-red-800',
  real: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800'
}

onMounted(() => {
  if (news.value) {
    newsStore.setCurrentNews(news.value)
  }
})
</script>