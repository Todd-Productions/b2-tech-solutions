import React from "react"
import { UrlType } from "@/types"
import Image from "next/image"
import "./hero.css"

export interface HeroProps {
  img: UrlType
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img } = props
  return (
    <div className="hero">
      <Image className="hero-img" src={img as string} alt="hero" fill />
    </div>
  )
}

export default Hero
