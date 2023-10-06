import cns from "classnames"
import React from "react"

import "./button.css"

export type ButtonColors = "black" | "green"

export interface ButtonProps {
  type?: "submit" | "button"
  color?: ButtonColors
  children?: string
  fullWidth?: boolean
  includeArrow?: boolean
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, fullWidth, color, onClick, includeArrow, disabled } =
    {
      type: "button",
      includeArrow: false,
      ...props,
    }

  return (
    <button
      onClick={onClick}
      data-over="over here up"
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      className={cns(
        "button border-0 bg-transparent transition-all text-base md:text-base text-sm px-12 py-3 text-center duration-300 lowercase leading-6 no-underline disabled:opacity-50 disabled:cursor-default hover:cursor-pointer hover:no-underline",
        {
          [`btn-${color}`]: color?.length,
          "btn-block": fullWidth,
          testing: includeArrow,
        }
      )}
    >
      <div>
        <div className="btn-text">{children}</div>
        <div className="btn-text-2">{children}</div>
      </div>
      {includeArrow ? (
        <div>
          <span
            className={cns("arrow", {
              "arrow-white": color?.length,
            })}
          />
        </div>
      ) : null}
    </button>
  )
}

export default Button
