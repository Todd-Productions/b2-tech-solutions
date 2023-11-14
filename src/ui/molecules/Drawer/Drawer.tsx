import { forwardRef } from "react"
import slugify from "slugify"
import Link from "next/link"
import cns from "classnames"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import { Icon } from "../../atoms"

// @types
import { INavLink } from "../../../types"

import "./drawer.css"

export interface DrawerProps {
  links: INavLink[]
  isOpen: boolean
  onClose: () => void
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { links, isOpen, onClose } = props

  return (
    <div
      className={cns("drawer", {
        "drawer-is-visible": isOpen,
      })}
      ref={ref}
    >
      <div>
        <div className="">
          <Icon onClick={() => onClose()} icon={faXmark} />
        </div>

        <ul className="mt-8">
          {links.map((item) => (
            <li className="drawer-link" key={slugify(item.url as string)}>
              {/* Close when clicking links on page URL */}
              <Link onClick={() => onClose()} href={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

Drawer.defaultProps = {}

export default Drawer
