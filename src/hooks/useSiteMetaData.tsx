/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
