import { Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import * as React from 'react'
import ImageMDX from '../content/image/index.mdx'
import Image from '../components/image/Image'
import ImageText from '../components/image/ImageText'
import { MDXProvider } from '@mdx-js/react'
import MainNav from '../components/nav/main'
import Sidebar from '../components/nav/sidebar'
import { usePhotographyMdx } from '../hooks/usePhotographyMdx'
import { useAboutMdx } from '../hooks/useAboutMdx'
import { useResumeMdx } from '../hooks/useResumeMdx'
import { shortcodes } from '.'

const Photography: React.FC<PageProps> = () => {
  const photographyMdx = usePhotographyMdx()
  const aboutMdx = useAboutMdx()
  const resumeMdx = useResumeMdx()

  const photos = useMemo(() => {
    if (!photographyMdx) return null

    return photographyMdx.nodes.map((props, index: number) => <ImageMDX {...props} index={index} />)
  }, [photographyMdx])

  return (
    <div>
      <MainNav publicUrl={resumeMdx.publicUrl} />
      <div className="flex flex-row">
        <div className="max-w-940">
          <MDXProvider components={shortcodes}>{photos}</MDXProvider>
        </div>
        <div>
          <Sidebar sections={photographyMdx.nodes.map(n => n.frontmatter.title)} aboutMdx={aboutMdx} />
        </div>
      </div>
    </div>
  )
}

export default Photography
