"use client"

import React from "react"
import Link from "next/link"
import slugify from "slugify"
import { usePathname } from "next/navigation"

import { INavLink } from "../../../types"
import { Button, Hamburger } from "../../atoms"
import "./nav.css"

export interface NavProps {
  links: INavLink[]
  onHamburgerClick?: () => void
}

const Nav: React.FC<NavProps> = (props) => {
  const { links, onHamburgerClick } = props
  const pathname = usePathname()

  return (
    <>
      <nav className="flex justify-center items-center rounded hidden md:flex">
        {links.map((link) => {
          const isActive = pathname === link.url ? "active" : ""
          return (
            <Link
              key={slugify(link.label)}
              href={link.url}
              className={`nav-item ${isActive}`}
            >
              <Button>{link.label}</Button>
            </Link>
          )
        })}
      </nav>

      <div className="block md:hidden">
        <Hamburger onClick={onHamburgerClick} />
      </div>
    </>
  )
}

export default Nav
