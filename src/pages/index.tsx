import React, { useMemo } from "react";
import { Link, type PageProps, graphql, useStaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Image from "../content/image/index.mdx";
import ImageText from "../components/image/ImageText";
import ImageLayout from "../components/image/ImageLayout";
import "../styles/global.css";

import { ImageDataLike } from "gatsby-plugin-image";

export const shortcodes = { Link, ImageText, Image };

export const allMdx = graphql`
  query {
    mdx(fields: { slug: { eq: "/header" } }) {
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
`;

export type ImageMdxNode = {
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    featuredImage: {
      childImageSharp: {
        gatsbyImageData: ImageDataLike;
      };
    };
  };
  body: string;
};

interface ImageMdxQuery {
  mdx: ImageMdxNode;
}

const Index: React.FC<PageProps> = () => {
  const allMdxData = useStaticQuery<ImageMdxQuery>(allMdx);

  const header = useMemo(() => {
    const mdx = allMdxData.mdx;

    return (
      <ImageLayout>
        <Image {...mdx} />
      </ImageLayout>
    );
  }, [allMdxData]);

  return <MDXProvider components={shortcodes}>{header}</MDXProvider>;
};

export default Index;
