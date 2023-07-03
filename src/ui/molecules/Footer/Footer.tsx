import React from "react"
import Link from "next/link"
import slugify from "slugify"

import { INavLink } from "../../../types"
import { Wrapper } from "../../atoms"
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
            <p>© B2 Tech Solutions 2023</p>
          </div>
          <div>
            {links.map((link) => (
              <Link
                className="md:ml-20 mx-4 p-0"
                href={link.url}
                key={slugify(link.label)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
