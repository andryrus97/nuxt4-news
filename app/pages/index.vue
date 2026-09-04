<script setup lang="ts">
import { useNews } from '~/composables/useNewsFetch'

const { news, loading, error } = useNews()
</script>
<template>
  <div>Main page</div>
  <div v-if="loading">{{ loading }}</div>
  <div v-if="error">{{ error }}</div>
  <div>{{ news }}</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
<style lang="scss" scoped></style>
