import React, { ReactNode } from "react"

import { Header, Footer } from "../../molecules"
import { INavLink, UrlType } from "../../../types"

export interface MainLayoutProps {
  children?: ReactNode
  navLinks: INavLink[]
  footerLinks: INavLink[]
  hireLink: UrlType
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, navLinks, footerLinks, hireLink } = props

  return (
    <div>
      <Header links={navLinks} hireLink={hireLink} />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </div>
  )
}

MainLayout.defaultProps = {}

export default MainLayout
