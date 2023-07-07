import React from "react"
import Image from "next/image"
import { UrlType } from "@/types"

import "./jobimagecard.css"

export interface JobImageProps {
  img: UrlType
  excerpt: string
}

const JobImageCard: React.FC<JobImageProps> = (props) => {
  const { img, excerpt } = props
  return (
    <div className="job-card rounded-3xl relative">
      <Image
        className="job-card-img"
        src={img as string}
        alt="job-image"
        fill
      />
      <p className="job-card-excerpt p-4 m-4 text-black-500 md:text-xl">
        {excerpt}
      </p>
    </div>
  )
}

export default JobImageCard
