<template>
  <div class="flex space-x-2">
    <button
      v-for="filterOption in filterOptions"
      :key="filterOption.value"
      @click="$emit('filter-change', filterOption.value)"
      :class="[
        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
        currentFilter === filterOption.value
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
    >
      {{ filterOption.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentFilter: string
}>()

defineEmits<{
  'filter-change': [value: string]
}>()

const filterOptions = [
  { value: 'all', label: 'All News' },
  { value: 'fake', label: 'Fake News' },
  { value: 'real', label: 'Real News' },
  { value: 'pending', label: 'Under Review' }
]
</script>