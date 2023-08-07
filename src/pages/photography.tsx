import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import { ImageMdxNode } from ".";
import { useMemo } from "react";
import * as React from "react";
import ImageMDX from "../content/image/index.mdx";
import Image from "../components/image/Image";
import ImageText from "../components/image/ImageText";
import { MDXProvider } from "@mdx-js/react";
import MainNav from "../components/nav/main";
import Sidebar from "../components/nav/sidebar";

const shortcodes = { Link, ImageText, Image };

export const allMdx = graphql`
  query {
    allMdx(filter: { fields: { slug: { eq: "/photography" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          description
          sub
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 900)
            }
          }
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

const Photography: React.FC<PageProps> = () => {
  const allMdxData = useStaticQuery<ImageMdxQuery>(allMdx);

  const photos = useMemo(() => {
    if (!allMdxData.allMdx) return null;

    return allMdxData.allMdx.nodes.map((props, index: number) => (
      <ImageMDX {...props} index={index} />
    ));
  }, [allMdxData]);

  return (
    <div>
      <MainNav />
      <div className="flex flex-row">
        <div className="max-w-940">
          <MDXProvider components={shortcodes}>{photos}</MDXProvider>
        </div>
        <div>
          <Sidebar
            sections={allMdxData.allMdx.nodes.map((n) => n.frontmatter.title)}
            aboutMdx={allMdxData.mdx}
          />
        </div>
      </div>
    </div>
  );
};

export default Photography;
