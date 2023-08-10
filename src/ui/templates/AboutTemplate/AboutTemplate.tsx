import React from "react"

import { AboutSection, ConnectSection } from "../../molecules"
import { MainLayout, ExperienceSection } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"

// @types
import { UrlType, IJobInfo } from "../../../types"

export interface AboutProps extends DefaultProps {
  aboutHeading: string
  aboutSubheading: string
  aboutImg: UrlType
  aboutDescription: string[]
  educationHeader: string
  educationDescription: string
  jobs: IJobInfo[]
  connectDescription: string[]
}

const AboutTemplate: React.FC<AboutProps> = (props) => {
  const {
    aboutHeading,
    aboutSubheading,
    aboutImg,
    aboutDescription,
    educationDescription,
    educationHeader,
    jobs,
    hireMeLink,
    connectDescription,
  } = props
  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AboutSection
        header={aboutHeading}
        subHeader={aboutSubheading}
        educationHeader={educationHeader}
        education={educationDescription}
        img={aboutImg}
        description={aboutDescription}
      />
      <ExperienceSection jobs={jobs} />
      <ConnectSection hireLink={hireMeLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
