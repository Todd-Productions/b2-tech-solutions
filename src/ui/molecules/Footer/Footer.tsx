import React from "react"
import slugify from "slugify"

import { IFooterLink } from "@/types"
import { Wrapper, Icon } from "../../atoms"

// @types

import "./footer.css"

export interface FooterProps {
  links: IFooterLink[]
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
              <a
                className="footer-link mx-4 p-0"
                href={link.url}
                key={slugify(link.url)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-span border border-black-500 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <Icon icon={link.icon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
