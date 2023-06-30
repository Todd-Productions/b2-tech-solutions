import React from "react";
import { UrlObject } from "url";
import "./ImageCard.css";

export interface ImageCardProps {
  img: string | UrlObject;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img } = props;
  return (
    <div
      className="card rounded-3xl bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${img})` }}
    />
  );
};

export default ImageCard;
