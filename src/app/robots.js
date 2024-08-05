import { MetadataRoute } from 'next'
 
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap: 'https://mypainclinicglobal.com/sitemap.xml',
  }
}