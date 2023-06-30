import React from "react"

export interface SectionProps {
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = (props) => {
  const { children } = props
  return <section className="bg-white py-10">{children}</section>
}

export default Section
