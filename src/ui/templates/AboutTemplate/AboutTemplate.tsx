import React from "react"

import { AboutSection, ConnectSection, EducationSection } from "../../molecules"
import { MainLayout, ExperienceSection } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"

// @types
import { UrlType, IJobInfo } from "../../../types"
import { IEducation } from "../../molecules/EducationSection/EducationSection"

export interface AboutProps extends DefaultProps {
  aboutHeading: string
  aboutSubheading: string
  aboutImg: UrlType
  aboutDescription: string[]
  educationHeader: string
  educationHistory: IEducation[]
  jobs: IJobInfo[]
  connectDescription: string[]
}

const AboutTemplate: React.FC<AboutProps> = (props) => {
  const {
    aboutHeading,
    aboutSubheading,
    aboutImg,
    aboutDescription,
    educationHistory,
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
        img={aboutImg}
        description={aboutDescription}
      />
      <ExperienceSection jobs={jobs} />

      <EducationSection header={educationHeader} education={educationHistory} />

      <ConnectSection hireLink={hireMeLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
