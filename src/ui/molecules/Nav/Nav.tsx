import React from "react"
import Link from "next/link"
import slugify from "slugify"

import { INavLink } from "@/types"

export interface NavProps {
  links: INavLink[]
}

const Nav: React.FC<NavProps> = (props) => {
  const { links } = props

  return (
    <nav className="flex justify-between items-center pt-6 md:pt-0 rounded">
      {links.map((link) => (
        <Link
          key={slugify(link.label)}
          href={link.url}
          className="border border-gray-200 text-white rounded py-2 px-4"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
