import React from "react"

import { faBars } from "@fortawesome/free-solid-svg-icons"

import Icon from "../Icon/Icon"

export interface HamburgerProps {
  onClick?: () => void
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
  const { onClick } = props

  return (
    <div className="text-right mr-4 text-white text-2xl">
      <Icon icon={faBars} onClick={() => onClick && onClick()} />
    </div>
  )
}

export default Hamburger
