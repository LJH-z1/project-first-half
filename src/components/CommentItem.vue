<template>
  <div class="comment-item bg-white rounded-lg shadow-sm border border-gray-200 p-4">
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
</template>

<script setup lang="ts">
import type { Comment } from '../types/index'

defineProps<{
  comment: Comment
}>()
</script>