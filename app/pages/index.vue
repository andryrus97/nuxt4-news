<script setup lang="ts">
import { useNews } from '~/composables/useNewsFetch'

const { news, loading, error } = useNews()
</script>
<template>
  <div v-if="loading">{{ loading }}</div>
  <div v-if="error">{{ error }}</div>
  <NewsList :news="news" />
</template>
<style lang="scss" scoped></style>
