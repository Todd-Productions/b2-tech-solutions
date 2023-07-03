import React from "react"
import Image from "next/image"
import { UrlType } from "@/types"

export interface JobImageProps {
  img: UrlType
  excerpt: string
}

const JobImageCard: React.FC<JobImageProps> = (props) => {
  const { img, excerpt } = props
  return (
    <div className="card w-60 h-60 relative">
      <Image src={img as string} alt="" fill />
      <p className="absolute text-white">{excerpt}</p>
    </div>
  )
}

export default JobImageCard
