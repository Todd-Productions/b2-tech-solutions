import React from "react"

import { UrlType } from "../../../types"
import { AboutSection, ConnectSection } from "../../molecules"
import { MainLayout, ExperienceSection } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"

import { IJobInfo } from "../../molecules/JobInfoArea/JobInfoArea"

export interface AboutProps extends DefaultProps {
  aboutImg: UrlType
  aboutDescription: string
  jobs: IJobInfo[]
  connectDescription: string[]
}

const AboutTemplate: React.FC<AboutProps> = (props) => {
  const { aboutImg, aboutDescription, jobs, hireMeLink, connectDescription } =
    props
  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AboutSection img={aboutImg} description={aboutDescription} />
      <ExperienceSection jobs={jobs} />
      <ConnectSection hireLink={hireMeLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
