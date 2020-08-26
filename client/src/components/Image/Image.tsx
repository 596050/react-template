import React from "react";
import { StyledImage } from "./Image.styles";

type Props = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Props) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
