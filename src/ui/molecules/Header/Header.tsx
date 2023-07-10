import React from "react"
import Image from "next/image"
import Link from "next/link"

import { INavLink, ISocialLinks } from "../../../types"

import { Button } from "../../atoms"
import Nav from "../Nav/Nav"
import "./header.css"

export interface HeaderProps extends ISocialLinks {
  links: INavLink[]
  hireLink: INavLink
}

const Header: React.FC<HeaderProps> = (props) => {
  const { links, hireLink } = props

  return (
    <header className="header">
      <div className="header-grid grid content-center items-center grid-cols-[1fr_2fr] sm:grid-cols-[75px_1fr_auto]">
        <div className="header-item">
          <Link href="/" title="B2 Tech Solutions" className="inline-block">
            <Image
              src="/images/logo-green.svg"
              height={50}
              width={50}
              alt="B2 Tech Solutions"
              className="transition-all ease-in-out hover:scale-110"
            />
          </Link>
        </div>
        <div>
          <Nav links={links} />
        </div>
        <div className="hidden sm:block header-item">
          <Link href={hireLink.url}>
            <Button color="green" includeArrow>
              {hireLink.label}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
