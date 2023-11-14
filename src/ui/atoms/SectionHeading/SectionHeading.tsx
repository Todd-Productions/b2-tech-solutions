import React, { ReactNode } from "react"
import cns from "classnames"
import "./heading.css"

export interface SectionHeadingProps {
  children?: ReactNode
  tag?: "h1" | "h2" | "h3"
  size?: "small"
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children, tag, size } = props
  const HeadingTag = tag || "h2"
  return (
    <HeadingTag
      className={cns(
        "section-heading text-black-500 m-0 p-0 relative uppercase",
        {
          "size-small": size,
        }
      )}
    >
      {children}
    </HeadingTag>
  )
}

export default SectionHeading
