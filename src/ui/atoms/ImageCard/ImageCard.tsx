import React from "react"
import Image from "next/image"
import Link from "next/link"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { IImageCard } from "../../../types"
import Icon from "../Icon/Icon"
import "./ImageCard.css"

export interface ImageCardProps {
  card: IImageCard
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { card } = props
  console.log(card)
  return (
    <div className="image-card">
      <Link href={card.projectLink}>
        <Image
          className="image-card-img"
          src={card.img as string}
          alt="project"
          fill
        />
        <div className="show-text text-2xl">
          {card.excerpt.map((excerpt) => (
            <p className="mb-2">{excerpt}</p>
          ))}
        </div>
        <div className="image-card-icon show-icon">
          <Icon icon={faArrowRight} />
          <div className="image-card-arrow2">
            <Icon icon={faArrowRight} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ImageCard
