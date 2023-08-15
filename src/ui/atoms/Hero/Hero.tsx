import React, { ReactNode } from "react"
import { UrlType } from "@/types"
import Image from "next/image"
import "./hero.css"

export interface HeroProps {
  img: UrlType
  children?: ReactNode
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img, children } = {
    children: (
      <>
        <div>
          b<sup>2</sup> tech
        </div>
        <div>solutions</div>
      </>
    ),
    ...props,
  }
  return (
    <div className="hero flex items-end overflow-hidden">
      <Image className="hero-img" src={img as string} alt="hero" fill />
      <div className="hero-content slide-up">{children}</div>
    </div>
  )
}

export default Hero
