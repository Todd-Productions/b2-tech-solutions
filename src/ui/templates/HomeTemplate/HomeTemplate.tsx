import React from "react"

import { Hero } from "../../atoms"
import { WorkSection, ConnectSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import { INavLink, UrlType, IImageCard } from "../../../types"

export interface HomeProps {
  title: string
  description: string
  navLinks: INavLink[]
  footerLinks: INavLink[]
  hireMeLink: UrlType
  jobCards: IImageCard[]
}

const HomeTemplate: React.FC<HomeProps> = (props) => {
  const { navLinks, footerLinks, hireMeLink, jobCards } = props
  return (
    <MainLayout
      navLinks={navLinks}
      footerLinks={footerLinks}
      hireLink={hireMeLink}
    >
      <Hero img="https://source.unsplash.com/random">b2 tech solutions</Hero>
      <WorkSection
        description="Explore our transformative consulting projects in SAP IDM, led by Brandon, an experienced SAP IDM professional and MSCE-certified expert."
        cards={jobCards}
      />
      <ConnectSection
        description={["Description 1", "Description 2"]}
        hireLink={hireMeLink}
      />
    </MainLayout>
  )
}

export default HomeTemplate
