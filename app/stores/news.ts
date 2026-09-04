import type { INews } from '~/types/news'

export const useNewsStore = defineStore('news', {
  state: () => {
    return {
      loading: false as Boolean,
      error: null as null,
      news: [] as INews[]
    }
  },
  getters: {
    getNews: (state) => state.news,
    getNewsCount: (state) => state.news.length
  },
  actions: {
    // https://noozra.com/api/articles?category=tech&limit=5
    async fetchNews(url: string) {
      this.loading = true
      this.error = null

      try {
        const data = await $fetch<{ articles: INews[] }>(url)
        this.news = data.articles ?? []

        return data.articles
      } catch (err: any) {
        this.error = err.message || 'Failed to fetch news'
        throw err
      } finally {
        this.loading = false
      }
    }
  }
})
