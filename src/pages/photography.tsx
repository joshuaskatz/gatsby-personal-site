import { Link, PageProps, graphql, useStaticQuery } from "gatsby";
import { ImageMdxNode } from ".";
import { useMemo } from "react";
import * as React from "react";
import ImageMDX from "../content/image/index.mdx";
import Image from "../components/image/Image";
import ImageText from "../components/image/ImageText";
import ImageLayout from "../components/image/ImageLayout";
import { MDXProvider } from "@mdx-js/react";
import MainNav from "../components/nav/main";

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
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;

interface ImageMdxQuery {
  allMdx: { nodes: ImageMdxNode[] };
}

const Photography: React.FC<PageProps> = () => {
  const allMdxData = useStaticQuery<ImageMdxQuery>(allMdx);

  const photos = useMemo(() => {
    if (!allMdxData.allMdx) return null;

    return allMdxData.allMdx.nodes.map((props, index: number) => (
      <ImageLayout key={index}>
        <ImageMDX {...props} index={index} />
      </ImageLayout>
    ));
  }, [allMdxData]);

  return (
    <div>
      <MainNav />
      <MDXProvider components={shortcodes}>{photos}</MDXProvider>
    </div>
  );
};

export default Photography;
