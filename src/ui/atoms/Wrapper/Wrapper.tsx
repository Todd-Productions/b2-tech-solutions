import React from "react"

export interface WrapperProps {
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props
  return <div className="container mx-auto">{children}</div>
}

export default Wrapper
