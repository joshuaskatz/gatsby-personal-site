import { PageProps, graphql, useStaticQuery } from "gatsby";
import { ImageMdxNode, shortcodes } from ".";
import ImageLayout from "../components/image/ImageLayout";
import { useMemo } from "react";
import * as React from "react";
import Image from "../content/image/index.mdx";
import { MDXProvider } from "@mdx-js/react";

export const allMdx = graphql`
  query {
    allMdx(filter: { fields: { slug: { nin: "/header" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          description
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
    return allMdxData.allMdx.nodes.map((props, index: number) => (
      <ImageLayout key={index} index={index}>
        <Image {...props} />
      </ImageLayout>
    ));
  }, [allMdxData]);

  return <MDXProvider components={shortcodes}>{photos}</MDXProvider>;
};

export default Photography;
