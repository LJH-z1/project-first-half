<template>
  <div v-if="news" class="vote-view max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Vote on: {{ news.title }}</h1>
      <p class="text-gray-600 mb-6">Share your opinion and help identify fake news</p>

      <!-- Voting options -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Do you think this news is real or fake?</h3>
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="selectedVote = 'real'"
            :class="[
              'p-4 rounded-lg border-2 transition-all duration-200 text-center',
              selectedVote === 'real'
                ? 'border-green-500 bg-green-50 text-green-700 shadow-md scale-105'
                : 'border-gray-300 hover:border-green-300 hover:shadow-sm'
            ]"
          >
            <div class="text-2xl mb-2">👍</div>
            <div class="font-medium">Real News</div>
            <div class="text-sm text-gray-600 mt-1">I believe this is accurate information</div>
          </button>
          
          <button
            @click="selectedVote = 'fake'"
            :class="[
              'p-4 rounded-lg border-2 transition-all duration-200 text-center',
              selectedVote === 'fake'
                ? 'border-red-500 bg-red-50 text-red-700 shadow-md scale-105'
                : 'border-gray-300 hover:border-red-300 hover:shadow-sm'
            ]"
          >
            <div class="text-2xl mb-2">👎</div>
            <div class="font-medium">Fake News</div>
            <div class="text-sm text-gray-600 mt-1">I believe this is misinformation</div>
          </button>
        </div>
      </div>

      <!-- Comment form -->
      <div class="mb-6">
        <label for="comment" class="block text-sm font-medium text-gray-700 mb-2">
          Why do you think this news is {{ selectedVote === 'real' ? 'real' : 'fake' }}?
          <span class="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          v-model="comment"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="Share your reasoning or evidence..."
          :class="commentError ? 'border-red-500' : ''"
        ></textarea>
        <p v-if="commentError" class="text-red-500 text-sm mt-1">{{ commentError }}</p>
      </div>

      <!-- Image URL input -->
      <div class="mb-6">
        <label for="imageUrl" class="block text-sm font-medium text-gray-700 mb-2">
          Evidence URL (optional)
        </label>
        <input
          id="imageUrl"
          v-model="imageUrl"
          type="url"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="https://example.com/evidence.jpg"
        />
        <p class="text-gray-500 text-sm mt-1">You can provide links to images, articles, or videos that support your opinion.</p>
      </div>

      <!-- Username input -->
      <div class="mb-6">
        <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
          Your Name
          <span class="text-red-500">*</span>
        </label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="Enter your name"
          :class="usernameError ? 'border-red-500' : ''"
          required
        />
        <p v-if="usernameError" class="text-red-500 text-sm mt-1">{{ usernameError }}</p>
      </div>

      <!-- Submit button -->
      <div class="flex space-x-4">
        <button
          @click="submitVote"
          :disabled="!isFormValid"
          class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex-1 flex items-center justify-center"
        >
          <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isSubmitting ? 'Submitting...' : 'Submit Vote & Comment' }}
        </button>
        
        <RouterLink 
          :to="{ name: 'news-detail', params: { id: news.id } }"
          class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Cancel
        </RouterLink>
      </div>
    </div>

    <!-- Preview of current comments -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-lg font-semibold mb-4">Recent Community Comments</h3>
      <div class="space-y-3">
        <div 
          v-for="comment in recentComments" 
          :key="comment.id"
          class="border-l-4 border-blue-500 bg-blue-50 p-3 rounded"
        >
          <div class="flex justify-between items-start">
            <span class="font-medium text-gray-900">{{ comment.username }}</span>
            <span 
              :class="[
                'px-2 py-1 rounded text-xs font-medium',
                comment.vote === 'fake' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              ]"
            >
              {{ comment.vote === 'fake' ? 'Fake' : 'Real' }}
            </span>
          </div>
          <p class="text-gray-700 text-sm mt-1">{{ comment.comment }}</p>
          <p class="text-gray-500 text-xs mt-2">{{ formatCommentTime(comment.timestamp) }}</p>
        </div>
      </div>
      <p v-if="recentComments.length === 0" class="text-gray-500 text-center py-4">
        No comments yet. Be the first to share your thoughts!
      </p>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500 text-lg">News not found</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/news'
import { useCommentStore } from '@/stores/comments'

const route = useRoute()
const router = useRouter()
const newsStore = useNewsStore()
const commentStore = useCommentStore()

const newsId = parseInt(route.params.id as string)
const selectedVote = ref<'fake' | 'real'>('real')
const comment = ref('')
const imageUrl = ref('')
const username = ref('')
const isSubmitting = ref(false)
const commentError = ref('')
const usernameError = ref('')

const news = computed(() => 
  newsStore.news.find(item => item.id === newsId)
)

// Get recent comments for this news (last 3)
const recentComments = computed(() => 
  commentStore.getCommentsByNewsId(newsId).slice(0, 3)
)

// Form validation
const isFormValid = computed(() => {
  return selectedVote.value && username.value.trim() && comment.value.trim() && !isSubmitting.value
})

// Validate form
const validateForm = () => {
  let isValid = true
  
  if (!username.value.trim()) {
    usernameError.value = 'Please enter your name'
    isValid = false
  } else {
    usernameError.value = ''
  }
  
  if (!comment.value.trim()) {
    commentError.value = 'Please share your reasoning'
    isValid = false
  } else {
    commentError.value = ''
  }
  
  return isValid
}

const submitVote = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Update vote count
    newsStore.updateVote(newsId, selectedVote.value)

    // Add comment
    commentStore.addComment({
      newsId,
      username: username.value.trim(),
      vote: selectedVote.value,
      comment: comment.value.trim(),
      imageUrl: imageUrl.value.trim() || undefined,
      timestamp: new Date().toISOString()
    })

    // Show success message
    alert('Thank you for your contribution! Your vote and comment have been submitted.')
    
    // Redirect to news detail page
    router.push({ name: 'news-detail', params: { id: newsId } })
    
  } catch (error) {
    console.error('Error submitting vote:', error)
    alert('There was an error submitting your vote. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const formatCommentTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString()
}

onMounted(() => {
  if (!news.value) {
    router.push({ name: 'home' })
  }
})
</script>