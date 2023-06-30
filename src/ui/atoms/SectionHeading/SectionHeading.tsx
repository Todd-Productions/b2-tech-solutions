import React from "react"

import "./heading.css"

export interface SectionHeadingProps {
  children?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props

  return (
    <h2 className="text-grey-600 text-6xl mb-4 relative uppercase section-heading font-heading">
      {children}
    </h2>
  )
}

export default SectionHeading
