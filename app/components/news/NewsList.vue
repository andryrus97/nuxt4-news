<script setup lang="ts">
const newsItems = ref([])
</script>

<template>
  <div v-for="news in newsItems">
    <NewsItem :news="news" />
  </div>
</template>

<style lang="scss" scoped></style>
