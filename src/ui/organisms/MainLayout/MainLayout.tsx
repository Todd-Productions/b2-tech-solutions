import React, { ReactNode } from "react"

import { Header, Footer } from "../../molecules"
import { INavLink } from "../../../types"

export interface MainLayoutProps {
  children?: ReactNode
  navLinks: INavLink[]
  footerLinks: INavLink[]
  hireLink: INavLink
  displayHireMobile?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, navLinks, footerLinks, hireLink, displayHireMobile } = props

  return (
    <div>
      <Header
        links={navLinks}
        hireLink={hireLink}
        displayHireMobile={displayHireMobile}
      />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </div>
  )
}

export default MainLayout
