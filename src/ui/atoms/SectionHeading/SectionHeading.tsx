import React, { ReactNode } from "react"
import "./heading.css"

export interface SectionHeadingProps {
  children?: ReactNode
  tag?: "h1" | "h2" | "h3"
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, tag } = props
  const HeadingTag = tag || "h2"
  return (
    <HeadingTag className="section-heading text-black-500 m-0 p-0 relative uppercase">
      {children}
    </HeadingTag>
  )
}

export default SectionHeading
