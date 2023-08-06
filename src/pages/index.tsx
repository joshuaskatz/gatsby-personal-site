import React, { useMemo } from "react";
import { Link, type PageProps, graphql, useStaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import ImageMDX from "../content/image/index.mdx";
import Image from "../components/image/Image";
import ImageText from "../components/image/ImageText";

import { ImageDataLike } from "gatsby-plugin-image";
import MainNav from "../components/nav/main";

const shortcodes = { Link, ImageText, Image };

export const allMdx = graphql`
  query {
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

export type ImageMdxNode = {
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    sub: string;
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

    return <ImageMDX className={`flex flex-col lg:flex-row`} {...mdx} />;
  }, [allMdxData]);

  return (
    <div>
      <MainNav />

      <MDXProvider components={shortcodes}>{header}</MDXProvider>
    </div>
  );
};

export default Index;
