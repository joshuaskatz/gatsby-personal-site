import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hooks/useSiteMetaData'

export default function SEO({ children }: PropsWithChildren) {
  const data = useSiteMetadata()

  const { title, description, siteUrl, image } = data

  const seo = {
    title,
    description,
    image: `${siteUrl}${image}`,
    url: siteUrl,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="og:card" content="summary_large_image" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />

      {children}
    </Helmet>
  )
}
