<template>
  <div v-if="news" class="news-detail">
    <!-- News Header Section -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <!-- News Image -->
      <img 
        v-if="news.imageUrl" 
        :src="news.imageUrl" 
        :alt="news.title"
        class="w-full h-64 object-cover"
      >
      
      <div class="p-6">
        <!-- Status and Date -->
        <div class="flex justify-between items-start mb-4">
          <span 
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              statusClasses[news.status]
            ]"
          >
            {{ statusText[news.status] }}
          </span>
          <span class="text-sm text-gray-500">{{ formatDateTime(news.date, news.time) }}</span>
        </div>

        <!-- News Topic -->
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ news.title }}</h1>
        
        <!-- Full Details -->
        <div class="prose max-w-none mb-6">
          <h3 class="text-xl font-semibold mb-3">Full Story</h3>
          <p class="text-gray-700 leading-relaxed">{{ news.fullDescription }}</p>
        </div>

        <!-- Reporter Information -->
        <div class="border-t border-gray-200 pt-4 mb-4">
          <h3 class="text-lg font-semibold mb-2">Reporter Information</h3>
          <div class="flex items-center space-x-4 text-sm text-gray-600">
            <div>
              <span class="font-medium">Reporter:</span> {{ news.reporter }}
            </div>
            <div>
              <span class="font-medium">Published:</span> {{ news.date }} at {{ news.time }}
            </div>
          </div>
        </div>

        <!-- Voting Results -->
        <div class="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 class="text-lg font-semibold mb-3">Community Voting Results</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center">
              <div class="text-2xl text-green-500 mb-1">👍</div>
              <div class="text-lg font-semibold text-green-600">{{ news.voteCount.real }}</div>
              <div class="text-sm text-gray-600">Real Votes</div>
              <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  class="bg-green-500 h-2 rounded-full" 
                  :style="{ width: realVotePercentage + '%' }"
                ></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">{{ realVotePercentage.toFixed(1) }}%</div>
            </div>
            <div class="text-center">
              <div class="text-2xl text-red-500 mb-1">👎</div>
              <div class="text-lg font-semibold text-red-600">{{ news.voteCount.fake }}</div>
              <div class="text-sm text-gray-600">Fake Votes</div>
              <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  class="bg-red-500 h-2 rounded-full" 
                  :style="{ width: fakeVotePercentage + '%' }"
                ></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">{{ fakeVotePercentage.toFixed(1) }}%</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-4">
          <RouterLink 
            :to="{ name: 'vote', params: { id: news.id } }"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
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

    <!-- Comments Section -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Community Comments</h2>
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {{ comments.length }} comments
        </span>
      </div>

      <!-- Comment List -->
      <div class="space-y-4">
        <div 
          v-for="comment in comments" 
          :key="comment.id"
          class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
        >
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {{ comment.username.charAt(0).toUpperCase() }}
              </div>
              <div>
                <span class="font-semibold text-gray-900">{{ comment.username }}</span>
                <span 
                  :class="[
                    'ml-2 px-2 py-1 rounded text-xs font-medium',
                    comment.vote === 'fake' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  ]"
                >
                  Voted: {{ comment.vote === 'fake' ? 'Fake' : 'Real' }}
                </span>
              </div>
            </div>
            <span class="text-sm text-gray-500">{{ formatCommentTime(comment.timestamp) }}</span>
          </div>
          
          <p class="text-gray-700 mb-3">{{ comment.comment }}</p>
          
          <div v-if="comment.imageUrl" class="mt-3">
            <a 
              :href="comment.imageUrl" 
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              View Evidence
            </a>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="comments.length === 0" class="text-center py-8">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <p class="text-gray-500 text-lg mb-4">No comments yet</p>
        <p class="text-gray-400">Be the first to share your thoughts and vote on this news!</p>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="text-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
    <p class="text-gray-500 text-lg">Loading news details...</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/news'
import { useCommentStore } from '@/stores/comments'

const route = useRoute()
const newsStore = useNewsStore()
const commentStore = useCommentStore()

const newsId = parseInt(route.params.id as string)

const news = computed(() => 
  newsStore.news.find(item => item.id === newsId)
)

const comments = computed(() => 
  commentStore.getCommentsByNewsId(newsId)
)

// Calculate vote percentages
const realVotePercentage = computed(() => {
  if (!news.value) return 0
  const total = news.value.voteCount.fake + news.value.voteCount.real
  return total > 0 ? (news.value.voteCount.real / total) * 100 : 0
})

const fakeVotePercentage = computed(() => {
  if (!news.value) return 0
  const total = news.value.voteCount.fake + news.value.voteCount.real
  return total > 0 ? (news.value.voteCount.fake / total) * 100 : 0
})

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

// Format date and time
const formatDateTime = (date: string, time: string) => {
  return `${date} at ${time}`
}

// Format comment timestamp
const formatCommentTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString()
}

onMounted(() => {
  if (news.value) {
    newsStore.setCurrentNews(news.value)
  }
})
</script>