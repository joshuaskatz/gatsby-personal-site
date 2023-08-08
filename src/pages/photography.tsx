import { PageProps } from 'gatsby'
import { useMemo } from 'react'
import * as React from 'react'
import ImageMDX from '../content/image/index.mdx'
import { MDXProvider } from '@mdx-js/react'
import MainNav from '../components/nav/main'
import Sidebar from '../components/nav/sidebar'
import { usePhotographyMdx } from '../hooks/usePhotographyMdx'
import { shortcodes } from '.'
import SEO from '../components/seo'

const Photography: React.FC<PageProps> = () => {
  const photographyMdx = usePhotographyMdx()

  const photos = useMemo(() => {
    if (!photographyMdx) return null

    return photographyMdx.nodes.map((props, index: number) => <ImageMDX {...props} index={index} />)
  }, [photographyMdx])

  return (
    <div>
      <MainNav />
      <div className="flex flex-row">
        <div className="max-w-940">
          <MDXProvider components={shortcodes}>{photos}</MDXProvider>
        </div>
        <div>
          <Sidebar sections={photographyMdx.nodes.map(n => n.frontmatter.title)} />
        </div>
      </div>
    </div>
  )
}

export default Photography

export const Head = () => <SEO />
