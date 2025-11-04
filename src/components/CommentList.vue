<template>
  <div class="comment-list">
    <h3 class="text-xl font-semibold mb-4">Comments ({{ comments.length }})</h3>
    
    <div class="space-y-4">
      <div
        v-for="comment in paginatedComments"
        :key="comment.id"
        class="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
      >
        <div class="flex justify-between items-start mb-2">
          <span class="font-medium text-gray-900">{{ comment.username }}</span>
          <span 
            :class="[
              'px-2 py-1 rounded text-xs font-medium',
              comment.vote === 'fake' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
            ]"
          >
            Voted: {{ comment.vote === 'fake' ? 'Fake' : 'Real' }}
          </span>
        </div>
        
        <p class="text-gray-700 mb-3">{{ comment.comment }}</p>
        
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>{{ comment.timestamp }}</span>
          <a 
            v-if="comment.imageUrl" 
            :href="comment.imageUrl" 
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
          >
            View Evidence
          </a>
        </div>
      </div>
    </div>

    <!-- Pagination for comments -->
    <div v-if="totalPages > 1" class="mt-6">
      <Pagination
        :current-page="currentPage"
        :total-items="comments.length"
        :items-per-page="commentsPerPage"
        @page-change="handlePageChange"
      />
    </div>

    <div v-if="comments.length === 0" class="text-center py-8 text-gray-500">
      No comments yet. Be the first to vote and comment!
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Pagination from './Pagination.vue'
import type { Comment } from '../types/index'

const props = defineProps<{
  comments: Comment[]
}>()

const commentsPerPage = ref(5)
const currentPage = ref(1)

const totalPages = computed(() => 
  Math.ceil(props.comments.length / commentsPerPage.value)
)

const paginatedComments = computed(() => {
  const start = (currentPage.value - 1) * commentsPerPage.value
  const end = start + commentsPerPage.value
  return props.comments.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
}
</script>