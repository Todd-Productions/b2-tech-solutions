import React from "react"
import { UrlType } from "@/types"
import Image from "next/image"
import "./ImageCard.css"

export interface ImageCardProps {
  img: UrlType
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img } = props
  return (
    <div className="image-card">
      <Image className="image-card-img" src={img as string} alt="tile" fill />
    </div>
  )
}

export default ImageCard
