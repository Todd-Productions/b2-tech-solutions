import React from "react"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { IImageCard } from "../../../types"
import Icon from "../Icon/Icon"
import "./ImageCard.css"

export interface ImageCardProps {
  card: IImageCard
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { card } = props
  return (
    <div className="image-card">
      <Link href={card.projectLink}>
        <Image
          className="image-card-img"
          src={card.img as string}
          alt="project"
          fill
        />
        <ul className="show-text text-2xl">
          {card.excerpt.map((excerpt) => (
            <li className="mb-2" key={slugify(excerpt)}>
              {excerpt}
            </li>
          ))}
        </ul>
        <div className="image-card-icon show-icon">
          <Icon icon={faArrowRight} />
          <div className="image-card-arrow2">
            <Icon icon={faArrowRight} />
          </div>
        </div>
      </Link>
      <div className="absolute left-5 bottom-5 show-logo">
        <Image
          src="/images/logo-green.svg"
          height={50}
          width={50}
          alt="B2 Tech Solutions"
        />
      </div>
    </div>
  )
}

export default ImageCard
