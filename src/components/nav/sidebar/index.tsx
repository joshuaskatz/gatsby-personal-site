import React, { useMemo } from "react";
import { ImageMdxNode } from "../../../pages";
import ImageMDX from "../../../content/sidebar/index.mdx";

import Image from "../../image/Image";
import ImageText from "../../image/ImageText";
interface SidebarProps {
  sections: ImageMdxNode[];
  aboutMdx: ImageMdxNode;
}

export default function Sidebar({ sections, aboutMdx }: SidebarProps) {
  const anchorTags = useMemo(() => {
    return sections.map((s) => {
      return (
        <a
          href={`#${s.frontmatter.title.replace(" ", "_").toLowerCase()}`}
          className="w-auto line-3 transition duration-200 hover:translate-x-2"
        >
          {s.frontmatter.title}
        </a>
      );
    });
  }, [sections]);

  console.log(aboutMdx);

  return (
    <div className="hidden fixed xl:flex justify-center items-center w-1/3 h-full">
      <div className="h-fit border-l border-x-stone-400 flex leading-8 flex-col pl-5 align-middle">
        {" "}
        <div className="w-72 -ml-5 -mb-5">
          <ImageMDX {...aboutMdx} />
        </div>
        {anchorTags}
      </div>
    </div>
  );
}
