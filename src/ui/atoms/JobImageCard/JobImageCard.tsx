import React from "react"
import Image from "next/image"
import { UrlObject } from "url"

export interface JobImageProps {
  img: string | UrlObject
  excerpt: string
}

const JobImageCard: React.FC<JobImageProps> = (props) => {
  const { img, excerpt } = props
  return (
    <div className="card w-60 h-60 relative">
      <Image src={img as string} alt="" fill />
      <p className="absolute">right here</p>
    </div>
  )
}

export default JobImageCard
