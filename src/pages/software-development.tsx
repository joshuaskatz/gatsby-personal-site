import React, { useMemo } from "react";
import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import MainNav from "../components/nav/main";
import Sidebar from "../components/nav/sidebar";
import Image from "../components/image/Image";
import ImageText from "../components/image/ImageText";
import { ImageMdxNode } from ".";
import Technologies from "../content/technologies/index.mdx";
import Portfolio from "../content/portfolio/index.mdx";

import { MDXProvider } from "@mdx-js/react";
import { uniq } from "lodash";

const shortcodes = { Link, ImageText, Image, Technologies };

export const allMdx = graphql`
  query {
    allMdx(
      filter: { fields: { slug: { in: ["/technologies", "/portfolio"] } } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          description
        }
      }
    }

    mdx(fields: { slug: { eq: "/about" } }) {
      frontmatter {
        slug
        title
        description
        sub
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;

interface ImageMdxQuery {
  allMdx: { nodes: ImageMdxNode[] };
  mdx: ImageMdxNode;
}

const SoftwareDev: React.FC<PageProps> = () => {
  const allMdxData = useStaticQuery<ImageMdxQuery>(allMdx);

  return (
    <div>
      <MainNav />
      <div className="flex flex-row ">
        <div className="w-940">
          <MDXProvider components={shortcodes}>
            <Technologies {...allMdxData.allMdx} />
            <Portfolio {...allMdxData.allMdx} />
          </MDXProvider>
        </div>
        <div>
          <Sidebar
            sections={uniq(
              allMdxData.allMdx.nodes.map((n) => n.frontmatter.slug)
            )}
            aboutMdx={allMdxData.mdx}
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
