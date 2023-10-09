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
  workTitle: string
  workDescription: string
  jobCards: IImageCard[]
  connectTitle: string
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
    workTitle,
    workDescription,
    connectTitle,
    connectDescription,
  } = props
  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <Hero img={bannerImg as string} priority />
      <div id="work">
        <WorkSection
          header={workTitle}
          description={workDescription}
          cards={jobCards}
        />
      </div>
      <ConnectSection
        header={connectTitle}
        description={connectDescription}
        hireLink={hireMeLink}
      />
    </MainLayout>
  )
}

export default HomeTemplate
