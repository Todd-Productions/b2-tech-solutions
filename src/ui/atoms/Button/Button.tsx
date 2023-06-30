import React from "react"
import cns from "classnames"

import "./button.css"

export type ButtonColors = "primary" | "danger" | "default"

export interface ButtonProps {
  type?: "submit" | "button"
  color?: ButtonColors
  children?: string
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, fullWidth, color } = props

  return (
    <button
      type={type}
      className={cns(
        "border-0 bg-transparent transition-all text-base md:text-base text-sm px-12 py-3 text-center duration-300 lowercase leading-6 no-underline disabled:opacity-50 disabled:cursor-default hover:cursor-pointer hover:no-underline",
        {
          [`btn-${color}`]: true,
          "btn-block": fullWidth,
        }
      )}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  color: "default",
}

export default Button
