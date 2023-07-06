"use client"

import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface IconProps {
  icon: IconDefinition | any
  onClick?: () => void
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { icon, onClick } = props

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick()
    }
  }

  return (
    <div
      className="icon inline-block"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

Icon.defaultProps = {}

export default Icon
