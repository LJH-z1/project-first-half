<template>
  <div class="not-found text-center py-16">
    <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
    <p class="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
    <RouterLink 
      to="/"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
    >
      Go Back Home
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>