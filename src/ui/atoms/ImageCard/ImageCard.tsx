import React from "react"
import Image from "next/image"
import Link from "next/link"

import { UrlType } from "../../../types"
import "./ImageCard.css"

export interface ImageCardProps {
  img: UrlType
  excerpt: string
  projectLink: UrlType
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img, excerpt, projectLink } = props
  return (
    <div className="image-card">
      <Link href={projectLink}>
        <Image
          className="image-card-img"
          src={img as string}
          alt="project"
          fill
        />
        <div className="show-text">{excerpt}</div>
      </Link>
    </div>
  )
}

export default ImageCard
