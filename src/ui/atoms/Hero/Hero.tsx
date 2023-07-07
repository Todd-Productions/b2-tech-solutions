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
        <div>b2 tech</div>
        <div>solutions</div>
      </>
    ),
    ...props,
  }
  return (
    <div className="hero">
      <Image className="hero-img" src={img as string} alt="hero" fill />
      <div className="hero-content">{children}</div>
    </div>
  )
}

export default Hero
