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
      className={cns("font-bold text-lg mb-4 relative capitalized", {
        "text-green-600": textGreen,
        "text-grey-500": !textGreen,
      })}
    >
      {children}
    </h3>
  )
}

SectionSubHeading.defaultProps = {
  textGreen: true,
}

export default SectionSubHeading
