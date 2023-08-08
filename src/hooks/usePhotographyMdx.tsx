/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ImageDataLike } from 'gatsby-plugin-image'

export type FeaturedImage = {
  featuredImage: {
    childImageSharp: {
      gatsbyImageData: ImageDataLike
    }
  }
}

export type ImageMdxNode = {
  frontmatter: {
    slug: string
    title: string
    description: string
    sub?: string
    website?: string
    featuredImage: FeaturedImage
  }
  body: string
}

type AllMdx = {
  nodes: ImageMdxNode[]
}

interface PhotographyMdx {
  allMdx: AllMdx
}

export const usePhotographyMdx = () => {
  const data = useStaticQuery<PhotographyMdx>(graphql`
    query {
      allMdx(filter: { fields: { slug: { eq: "/photography" } } }) {
        nodes {
          id
          frontmatter {
            slug
            title
            description
            sub
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 1200)
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx
}
