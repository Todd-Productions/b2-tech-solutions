import React from "react"

import { Hero } from "../../atoms"
import { WorkSection, ConnectSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import { INavLink, UrlType, IImageCard } from "../../../types"

export interface DefaultProps {
  navLinks: INavLink[]
  footerLinks: INavLink[]
  hireMeLink: INavLink
}

export interface HomeProps extends DefaultProps {
  bannerImg: UrlType
  workDescription: string
  jobCards: IImageCard[]
  connectDescription: string[]
}

export const getMainLayoutProps = (data: DefaultProps) => ({
  navLinks: data.navLinks,
  footerLinks: data.footerLinks,
  hireLink: data.hireMeLink,
})

const HomeTemplate: React.FC<HomeProps> = (props) => {
  const {
    hireMeLink,
    jobCards,
    bannerImg,
    workDescription,
    connectDescription,
  } = props
  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <Hero img={bannerImg as string} />
      <div id="work">
        <WorkSection description={workDescription} cards={jobCards} />
      </div>
      <ConnectSection description={connectDescription} hireLink={hireMeLink} />
    </MainLayout>
  )
}

export default HomeTemplate
