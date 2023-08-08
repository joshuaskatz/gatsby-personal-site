/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export type SoftwareMdxNode = {
  frontmatter: {
    slug: string
    title: string
    description: string
    descriptionArray: string
    sub?: string
    website?: string
  }
  body: string
}

type AllMdx = {
  nodes: SoftwareMdxNode[]
}

interface PortfolioMdx {
  allMdx: AllMdx
}

export const usePortfolioMdx = () => {
  const data = useStaticQuery<PortfolioMdx>(graphql`
    query {
      allMdx(filter: { fields: { slug: { eq: "/portfolio" } } }) {
        nodes {
          id
          frontmatter {
            slug
            title
            website
            sub
            description
            descriptionArray
          }
        }
      }
    }
  `)

  return data.allMdx
}
