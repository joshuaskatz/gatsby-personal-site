import React, { useMemo } from "react";
import { ImageMdxNode } from "../../../pages";

export default function Sidebar({ sections }: { sections: ImageMdxNode[] }) {
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

  return (
    <div className="justify-end hidden fixed lg:flex flex-col leading-8 pl-5 top-1/3 left-2/3 h-fit border-l border-x-stone-400">
      {anchorTags}
    </div>
  );
}
