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
  const featuredImg = getImage(featuredImage.childImageSharp.gatsbyImageData);

  return <GatsbyImage image={featuredImg as IGatsbyImageData} alt="alt" />;
}
