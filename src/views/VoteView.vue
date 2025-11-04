<template>
  <div v-if="news" class="vote-view max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Vote on: {{ news.title }}</h1>
      <p class="text-gray-600 mb-6">Share your opinion and help identify fake news</p>

      <!-- Voting options -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Do you think this news is real or fake?</h3>
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="selectedVote = 'real'"
            :class="[
              'p-4 rounded-lg border-2 transition-colors text-center',
              selectedVote === 'real'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-300 hover:border-green-300'
            ]"
          >
            <div class="text-2xl mb-2">👍</div>
            <div class="font-medium">Real News</div>
            <div class="text-sm text-gray-600 mt-1">I believe this is accurate information</div>
          </button>
          
          <button
            @click="selectedVote = 'fake'"
            :class="[
              'p-4 rounded-lg border-2 transition-colors text-center',
              selectedVote === 'fake'
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-300 hover:border-red-300'
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
        </label>
        <textarea
          id="comment"
          v-model="comment"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Share your reasoning or evidence..."
        ></textarea>
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
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com/evidence.jpg"
        >
      </div>

      <!-- Username input -->
      <div class="mb-6">
        <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
          Your Name
        </label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        >
      </div>

      <!-- Submit button -->
      <div class="flex space-x-4">
        <button
          @click="submitVote"
          :disabled="!selectedVote || !username || !comment"
          class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex-1"
        >
          Submit Vote & Comment
        </button>
        
        <RouterLink 
          :to="{ name: 'news-detail', params: { id: news.id } }"
          class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Cancel
        </RouterLink>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500 text-lg">News not found</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
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

const news = computed(() => 
  newsStore.news.find(item => item.id === newsId)
)

const submitVote = () => {
  if (!selectedVote.value || !username.value || !comment.value) {
    alert('Please fill in all required fields')
    return
  }

  // Update vote count
  newsStore.updateVote(newsId, selectedVote.value)

  // Add comment
  commentStore.addComment({
    newsId,
    username: username.value,
    vote: selectedVote.value,
    comment: comment.value,
    imageUrl: imageUrl.value || undefined,
    timestamp: new Date().toLocaleString()
  })

  // Redirect to news detail page
  router.push({ name: 'news-detail', params: { id: newsId } })
}
</script>