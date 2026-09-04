export interface INews {
  id: string
  headline: string
  url: string
  published_at: string
  source: string
  category: string
  image_url: string
  image_width: number | null
  image_height: number | null
  description: string
}
