"use client"

import React from "react"
import Link from "next/link"
import slugify from "slugify"
import { usePathname } from "next/navigation"

import { INavLink } from "../../../types"
import { Button } from "../../atoms"
import "./nav.css"

export interface NavProps {
  links: INavLink[]
}

const Nav: React.FC<NavProps> = (props) => {
  const { links } = props
  const pathname = usePathname()

  return (
    <nav className="flex justify-center items-center rounded">
      {links.map((link) => {
        const isActive = pathname === link.url ? "active" : ""
        return (
          <Link
            key={slugify(link.label)}
            href={link.url}
            className={`nav-item border border-grey-500 text-white rounded py-2 px-4 ${isActive}`}
          >
            <Button>{link.label}</Button>
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
