import React from "react"
import cns from "classnames"

export interface SectionSubHeadingProps {
  children?: string
  textGreen?: boolean
}

const SectionSubHeading: React.FC<SectionSubHeadingProps> = (props) => {
  const { children, textGreen } = props

  return (
    <h3
      className={cns("font-bold text-xl mb-2 relative capitalize", {
        "text-green-600": textGreen,
        "text-grey-500": !textGreen,
      })}
    >
      {children}
    </h3>
  )
}

export default SectionSubHeading
