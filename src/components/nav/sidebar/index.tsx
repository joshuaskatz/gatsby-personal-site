import React, { useMemo } from 'react'
import ImageMDX from '../../../content/sidebar/index.mdx'
import { ImageMdxNode } from '../../../hooks/usePhotographyMdx'
import { PageProps, withPrefix } from 'gatsby'
interface SidebarProps {
  sections: string[]
  aboutMdx: ImageMdxNode
}

export default function Sidebar({ sections, aboutMdx, isSoftwareDev }: SidebarProps & { isSoftwareDev?: boolean }) {
  const anchorTags = useMemo(() => {
    return sections.map(s => {
      return (
        <a
          href={`#${s.replace(' ', '_').toLowerCase()}`}
          className="w-auto line-3 transition duration-200 hover:translate-x-2"
        >
          {s}
        </a>
      )
    })
  }, [sections])

  return (
    <div className="hidden fixed xl:flex justify-center items-start mt-2 w-1/3 h-full">
      <div className="h-fit border-l border-x-stone-400 flex leading-8 flex-col pl-5 align-middle">
        {anchorTags}
        {isSoftwareDev && (
          <>
            <a
              href={withPrefix('Joshua_Katz_Resume.pdf')}
              className="w-auto line-3 transition duration-200 hover:translate-x-2"
              download
            >
              résumé
            </a>
            <a
              href="https://github.com/joshuaskatz"
              className="w-auto line-3 transition duration-200 hover:translate-x-2"
              target="_blank"
              rel="noopenner noreferrer"
            >
              github
            </a>
          </>
        )}
      </div>
    </div>
  )
}
