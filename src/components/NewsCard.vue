<template>
  <div 
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
    @click="$emit('click')"
  >
    <img 
      v-if="news.imageUrl" 
      :src="news.imageUrl" 
      :alt="news.title"
      class="w-full h-48 object-cover"
    >
    
    <div class="p-6">
      <!-- Status badge -->
      <div class="flex justify-between items-start mb-3">
        <span 
          :class="[
            'px-3 py-1 rounded-full text-xs font-medium',
            statusClasses[news.status]
          ]"
        >
          {{ statusText[news.status] }}
        </span>
        <span class="text-xs text-gray-500">{{ news.date }} {{ news.time }}</span>
      </div>

      <!-- Title and description -->
      <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {{ news.title }}
      </h3>
      
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">
        {{ news.shortDescription }}
      </p>

      <!-- Vote statistics -->
      <div class="flex justify-between items-center text-sm">
        <div class="flex space-x-4">
          <span class="text-red-500">👎 {{ news.voteCount.fake }}</span>
          <span class="text-green-500">👍 {{ news.voteCount.real }}</span>
        </div>
        <span class="text-gray-500">by {{ news.reporter }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { News } from '../types/index'

defineProps<{
  news: News
}>()

defineEmits<{
  click: []
}>()

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
</script>