<script setup lang="ts">
import type { INews } from '~/types/news'

interface NewsListProps {
  news: INews[]
}

const props = defineProps<NewsListProps>()
</script>

<template>
  <NewsItem
    v-for="news in props.news"
    :news-item="news"
    :key="news.id"
  />
</template>

<style lang="scss" scoped></style>
