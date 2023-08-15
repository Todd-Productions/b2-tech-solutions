import React from "react"
import slugify from "slugify"

import {
  Section,
  SectionHeading,
  SectionSubHeading,
  Wrapper,
} from "../../atoms"

import "./education.css"

export interface IEducation {
  location: string
  bulletPoints: string[]
}

export interface EducationProps {
  header?: string
  education: IEducation[]
}

const EducationSection: React.FC<EducationProps> = (props) => {
  const { header, education } = {
    header: "education",
    ...props,
  }
  return (
    <Section>
      <Wrapper>
        <div className="text-center">
          <SectionHeading>{header}</SectionHeading>
          <div className="education-container mx-auto w-fit md:w-auto">
            {education.map((school: IEducation, idx: number) => (
              <div
                className="grid md:grid-cols-2 text-left"
                key={slugify(String(idx))}
              >
                <SectionSubHeading textGreen>
                  {school.location}
                </SectionSubHeading>
                <ul>
                  {school.bulletPoints.map((bullet) => (
                    <li className="list-disc text-xl" key={slugify(bullet)}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default EducationSection
