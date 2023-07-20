import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "../../atoms"
import Nav from "../Nav/Nav"
import "./header.css"

// @types
import { INavLink } from "../../../types"

export interface HeaderProps {
  links: INavLink[]
  hireLink: INavLink
  displayHireMobile?: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { links, hireLink, displayHireMobile } = props

  return (
    <>
      <header className="header">
        <div className="header-grid grid content-center items-center grid-cols-[1fr_2fr] sm:grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_auto]  md:gap-x-4">
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
      {displayHireMobile === true ? null : (
        <div className="top-32 w-full flex justify-center z-10 fixed sm:hidden">
          <Link href={hireLink.url}>
            <Button color="green" includeArrow>
              {hireLink.label}
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Header
