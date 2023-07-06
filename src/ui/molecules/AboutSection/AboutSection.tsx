import React from "react"
import { UrlType } from "../../../types"

export interface AboutProps {
  img: UrlType
  description: string
}

const AboutSection: React.FC<AboutProps> = () => (
  // const { img, description } = props
  <div>AboutSection</div>
)

export default AboutSection
