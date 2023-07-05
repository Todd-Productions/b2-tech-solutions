import React from "react"

import "./heading.css"

export interface SectionHeadingProps {
  children?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props

  return (
    <h2 className="text-grey-600 text-9xl m-0 p-0 relative uppercase section-heading">
      {children}
    </h2>
  )
}

export default SectionHeading
