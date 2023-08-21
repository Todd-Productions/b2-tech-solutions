import React from "react"
import Link from "next/link"
import slugify from "slugify"

import { INavLink } from "../../../types"
import { Wrapper, Button } from "../../atoms"
import "./footer.css"

export interface FooterProps {
  links: INavLink[]
}

const Footer: React.FC<FooterProps> = (props) => {
  const { links } = props
  return (
    <footer>
      <Wrapper>
        <div className="footer flex justify-between items-center md:py-8 py-4 text-black-500 border-t-4 border-black-500">
          <div className="mb-2">
            <p>
              © B<sup>2</sup> Tech Solutions 2023
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            {links.map((link) => (
              <Link
                className="footer-link mx-4 p-0"
                href={link.url}
                key={slugify(link.label)}
              >
                <Button>{link.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
