// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://newswatch.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://newswatch.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more pages here
  ]
}
