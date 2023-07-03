import React from "react"
import { UrlType } from "@/types"
import "./ImageCard.css"

export interface ImageCardProps {
  img: UrlType
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img } = props
  return (
    <div
      className="card rounded-3xl bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${img})` }}
    />
  )
}

export default ImageCard
