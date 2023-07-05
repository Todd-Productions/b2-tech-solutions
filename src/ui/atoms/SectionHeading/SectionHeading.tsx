import React, { ReactNode } from "react"

import "./heading.css"

export interface SectionHeadingProps {
  children?: ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props

  return (
    <h2 className="text-grey-600 text-6xl md:text-9xl font-bold m-0 p-0 relative uppercase">
      {children}
    </h2>
  )
}

export default SectionHeading
