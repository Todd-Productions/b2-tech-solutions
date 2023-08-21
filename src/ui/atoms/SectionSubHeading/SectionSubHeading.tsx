import React, { ReactNode } from "react"
import cns from "classnames"

export interface SectionSubHeadingProps {
  children?: ReactNode
  textGreen?: boolean
}

const SectionSubHeading: React.FC<SectionSubHeadingProps> = (props) => {
  const { children, textGreen } = props

  return (
    <h3
      className={cns("font-bold text-lg md:text-xl mb-2 relative", {
        "text-green-600": textGreen,
        "text-black-500": !textGreen,
      })}
    >
      {children}
    </h3>
  )
}

export default SectionSubHeading
