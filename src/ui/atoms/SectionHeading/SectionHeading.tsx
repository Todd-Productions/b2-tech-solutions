import React from "react"

import "./heading.css"

export interface SectionHeadingProps {
  children?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props

  return (
    <h2 className="text-grey-600 text-6xl lg:section-heading m-0 p-0 relative uppercase">
      {children}
    </h2>
  )
}

export default SectionHeading
