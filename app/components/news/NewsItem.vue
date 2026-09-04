<script setup lang="ts">
import Globe from '@primeicons/vue/globe'
import MapMarker from '@primeicons/vue/map-marker'
import Phone from '@primeicons/vue/phone'
import StarFill from '@primeicons/vue/star-fill'
import type { INews } from '~/types/news'

interface NewsItemProps {
  newsItem: INews
}

const props = defineProps<NewsItemProps>()
</script>

<template>
  <PrimeCard
    class="max-w-sm w-full overflow-hidden"
    :pt="{ body: { class: 'pt-16!' } }"
  >
    <template #header>
      <div class="relative">
        <img
          class="w-full max-h-42 object-cover"
          alt="news header"
          :src="props.newsItem.image_url"
        />
        <PrimeAvatar
          shape="circle"
          class="w-24! h-24! border-3 border-surface-0 dark:border-surface-900 absolute! -bottom-12! left-4!"
        >
          <img :src="props.newsItem.url" />
        </PrimeAvatar>
      </div>
    </template>
    <template #title>
      <span class="font-bold text-xl">{{ props.newsItem.headline }}</span>
    </template>
    <template #subtitle>
      <div class="flex items-center gap-2">
        <PrimeTag
          severity="info"
          value="Daily"
        />
        <PrimeTag
          severity="info"
          value="Premium"
        />
      </div>
    </template>
    <template #content>
      <div class="space-y-4">
        <p>
          {{ props.newsItem.description }}
        </p>
        <div class="flex items-center gap-2">
          <StarFill class="text-yellow-500" />
          <span><b>4.6</b> (200+ reviews)</span>
        </div>
        <div class="flex items-center gap-2">
          <MapMarker />
          <span>{{ props.newsItem.published_at }}</span>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex items-center gap-2 mt-4">
        <PrimeButton
          severity="secondary"
          outlined
          class="flex-1"
        >
          <Phone />
          Call Us
        </PrimeButton>
        <PrimeButton class="flex-1">
          <Globe />
          Visit Site
        </PrimeButton>
      </div>
    </template>
  </PrimeCard>
</template>

<style lang="scss" scoped></style>
