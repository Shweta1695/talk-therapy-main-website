import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export interface BlogPost {
  _id: string
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readMinutes: number
  image?: any
  imageAlt?: string
  body?: any[]
}

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  image,
  "imageAlt": image.alt,
  "readMinutes": round(length(pt::text(body)) / 5 / 200)
`

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${postFields}}`

export const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{${postFields}, body},
  "others": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{${postFields}}
}`

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})

export const formatReadTime = (mins: number) => `${Math.max(1, mins || 1)} min read`