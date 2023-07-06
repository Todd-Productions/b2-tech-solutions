import React from "react"

import { Hero } from "../../atoms"
import { WorkSection, ConnectSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import { INavLink, UrlType, IImageCard } from "../../../types"

export interface DefaultProps {
  title: string
  navLinks: INavLink[]
  footerLinks: INavLink[]
  hireMeLink: UrlType
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
      <WorkSection description={workDescription} cards={jobCards} />
      <ConnectSection description={connectDescription} hireLink={hireMeLink} />
    </MainLayout>
  )
}

export default HomeTemplate
