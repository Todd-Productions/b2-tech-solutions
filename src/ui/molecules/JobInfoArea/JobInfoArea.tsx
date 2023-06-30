import React from "react"

import { Section, SectionSubHeading } from "../../atoms"

export interface JobInfoProps {
  title: string
  timeline: string
  company: string
  bulletPoints: string[]
}

const JobInfoArea: React.FC<JobInfoProps> = (props) => {
  const { title, timeline, company, bulletPoints } = props
  return (
    <Section>
      <div className="grid grid-cols-[1fr_1fr] text-xl">
        <div>
          <SectionSubHeading>{title}</SectionSubHeading>
          <p>{timeline}</p>
          <p>{company}</p>
        </div>
        <div>
          <ul>
            {bulletPoints.map((bullet, idx) => (
              <li className="list-disc" key={idx}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default JobInfoArea
