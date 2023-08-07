import React, { useMemo } from 'react'
import { Link, type PageProps, graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import ImageMDX from '../content/image/index.mdx'
import Image from '../components/image/Image'
import ImageText from '../components/image/ImageText'

import MainNav from '../components/nav/main'
import SEO from '../components/seo'
import { useAboutMdx } from '../hooks/useAboutMdx'
import { useResumeMdx } from '../hooks/useResumeMdx'

export const shortcodes = { Link, ImageText, Image }

const Index: React.FC<PageProps> = () => {
  const aboutMdx = useAboutMdx()
  const resumeMdx = useResumeMdx()

  const header = useMemo(() => {
    return <ImageMDX className={`flex flex-col lg:flex-row`} {...aboutMdx} />
  }, [aboutMdx])

  return (
    <div>
      <MainNav publicUrl={resumeMdx.publicUrl} />
      <MDXProvider components={shortcodes}>{header}</MDXProvider>
    </div>
  )
}

export default Index

export const Head = () => <SEO />
