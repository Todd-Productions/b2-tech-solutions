import React from "react"

import { contactLink } from "@/data/siteMeta"
import { IImageCard, UrlType } from "../../../types"
import { Hero } from "../../atoms"
import { ConnectSection, WorkSection } from "../../molecules"
import { MainLayout } from "../../organisms"

export interface HomeProps {
  bannerImg: UrlType
  workTitle: string
  workDescription: string
  jobCards: IImageCard[]
  connectTitle: string
  connectDescription: string[]
}

const HomeTemplate: React.FC<HomeProps> = (props) => {
  const {
    jobCards,
    bannerImg,
    workTitle,
    workDescription,
    connectTitle,
    connectDescription,
  } = props
  return (
    <MainLayout>
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
        hireLink={contactLink}
      />
    </MainLayout>
  )
}

export default HomeTemplate
