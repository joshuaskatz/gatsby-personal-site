import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ImageMdxNode } from './usePhotographyMdx'

interface AboutMdx {
  mdx: ImageMdxNode
}

export const useAboutMdx = () => {
  const data = useStaticQuery<AboutMdx>(graphql`
    query {
      mdx(fields: { slug: { eq: "/about" } }) {
        frontmatter {
          slug
          title
          description
          sub
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
    }
  `)

  return data.mdx
}
