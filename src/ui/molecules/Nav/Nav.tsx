import React from "react"
import Link from "next/link"
import slugify from "slugify"

import "./nav.css"
import { INavLink } from "@/types"

export interface NavProps {
  links: INavLink[]
}

const Nav: React.FC<NavProps> = (props) => {
  const { links } = props

  return (
    <nav className="flex justify-center items-center rounded">
      {links.map((link) => (
        <Link
          key={slugify(link.label)}
          href={link.url}
          className="nav-item border border-grey-500 text-white rounded py-2 px-4"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
