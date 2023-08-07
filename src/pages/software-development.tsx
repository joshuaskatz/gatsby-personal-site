import React, { useMemo } from 'react'
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import MainNav from '../components/nav/main'
import Sidebar from '../components/nav/sidebar'

import { shortcodes } from '.'
import Technologies from '../content/technologies/index.mdx'
import Portfolio from '../content/portfolio/index.mdx'

import { MDXProvider } from '@mdx-js/react'
import { uniq } from 'lodash'
import { useTechnologiesMdx } from '../hooks/useTechnologiesMdx'
import { useAboutMdx } from '../hooks/useAboutMdx'
import { useResumeMdx } from '../hooks/useResumeMdx'
import { usePortfolioMdx } from '../hooks/usePortfolioMdx'

const SoftwareDev: React.FC<PageProps> = () => {
  const technologiesMdx = useTechnologiesMdx()
  const portfolioMdx = usePortfolioMdx()
  const aboutMdx = useAboutMdx()
  const resumeMdx = useResumeMdx()

  return (
    <div>
      <MainNav publicUrl={resumeMdx.publicUrl} />
      <div className="flex flex-row ">
        <div className="w-940">
          <MDXProvider components={shortcodes}>
            <Technologies {...technologiesMdx} />
            <Portfolio {...portfolioMdx} />
          </MDXProvider>
        </div>
        <div>
          <Sidebar sections={uniq(technologiesMdx.nodes.map(n => n.frontmatter.slug))} aboutMdx={aboutMdx} />
        </div>
      </div>
    </div>
  )
}

export default SoftwareDev
