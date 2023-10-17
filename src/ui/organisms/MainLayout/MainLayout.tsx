"use client"

import React, { ReactNode } from "react"
import { contactLink, footerLinks, navLinks } from "../../../data/siteMeta"

import { Footer, Header } from "../../molecules"

export interface MainLayoutProps {
  children?: ReactNode
  displayHireMobile?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, displayHireMobile } = props

  return (
    <>
      <Header
        links={navLinks}
        hireLink={contactLink}
        displayHireMobile={displayHireMobile}
      />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </>
  )
}

export default MainLayout
