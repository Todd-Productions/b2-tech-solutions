"use client"

import aboutData from "@/data/about.json"
import { contactLink } from "@/data/siteMeta"
import { AboutSection, ConnectSection, EducationSection } from "../../molecules"
import { ExperienceSection, MainLayout } from "../../organisms"

const AboutTemplate = () => {
  const {
    title,
    subtitle,
    aboutImg,
    aboutDescription,
    education,
    educationHeader,
    jobs,
    connectDescription,
  } = aboutData
  return (
    <MainLayout>
      <AboutSection
        header={title}
        subHeader={subtitle}
        img={aboutImg}
        description={aboutDescription}
      />
      <ExperienceSection jobs={jobs} />

      <EducationSection header={educationHeader} education={education} />

      <ConnectSection hireLink={contactLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
