import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";

interface ImageProps {
  featuredImage: { childImageSharp: { gatsbyImageData: ImageDataLike } };
}

export default function Image({ featuredImage }: ImageProps) {
  if (!featuredImage) return null;

  const featuredImg = getImage(
    featuredImage.childImageSharp.gatsbyImageData
  ) as IGatsbyImageData;

  return <GatsbyImage className="m-2 md:m-5" image={featuredImg} alt="alt" />;
}
