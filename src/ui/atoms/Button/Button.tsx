import React from "react"
import cns from "classnames"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Icon from "../Icon/Icon"

import "./button.css"

export type ButtonColors = "white" | "black" | "green"

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
      data-over="over here up"
      type={type === "submit" ? "submit" : "button"}
      className={cns(
        "button border-0 bg-transparent transition-all text-base md:text-base text-sm px-12 py-3 text-center duration-300 lowercase leading-6 no-underline disabled:opacity-50 disabled:cursor-default hover:cursor-pointer hover:no-underline",
        {
          [`btn-${color}`]: true,
          "btn-block": fullWidth,
        }
      )}
    >
      <div className="btn-text">
        {children} <Icon icon={faArrowRight} />
      </div>
      <div className="btn-text-2">
        {children} <Icon icon={faArrowRight} />
      </div>
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  color: "white",
}

export default Button
