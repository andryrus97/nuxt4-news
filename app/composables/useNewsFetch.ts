import { storeToRefs } from 'pinia'
import { useNewsStore } from '~/stores/news'

export const useNews = () => {
  const newsStore = useNewsStore()

  const { news, loading } = storeToRefs(newsStore)

  const { error, refresh } = useAsyncData('news', () =>
    newsStore.fetchNews('https://noozra.com/api/articles?category=tech&limit=5')
  )

  return {
    news,
    loading,
    error,
    refresh
  }
}
