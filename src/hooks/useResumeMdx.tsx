import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'

export type MdxFile = {
  publicUrl: string
}

interface ResumeMdx {
  file: MdxFile
}

export const useResumeMdx = () => {
  const data = useStaticQuery<ResumeMdx>(graphql`
    query {
      file(relativePath: { eq: "Joshua_Katz_Resume.pdf" }) {
        publicURL
        name
      }
    }
  `)

  return data.file
}
