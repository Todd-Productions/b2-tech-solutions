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
  jobs: IJobInfo[]
  connectDescription: string[]
}

const AboutTemplate: React.FC<AboutProps> = (props) => {
  const {
    aboutHeading,
    aboutSubheading,
    aboutImg,
    aboutDescription,
    jobs,
    hireMeLink,
    connectDescription,
  } = props
  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <AboutSection
        header={aboutHeading}
        subHeader={aboutSubheading}
        img={aboutImg}
        description={aboutDescription}
      />
      <ExperienceSection jobs={jobs} />
      <ConnectSection hireLink={hireMeLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
