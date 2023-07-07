import React from "react"
import slugify from "slugify"

import { Section, SectionSubHeading, JobImageCard } from "../../atoms"
import { UrlType } from "../../../types"

export interface JobInfoProps {
  title: string
  timeline: string
  company: string
  bulletPoints: string[]
  img: UrlType
  excerpt: string
}

const JobInfoArea: React.FC<JobInfoProps> = (props) => {
  const { title, timeline, company, bulletPoints, img, excerpt } = props
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
            {bulletPoints.map((bullet) => (
              <li className="list-disc" key={slugify(bullet)}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <JobImageCard img={img as string} excerpt={excerpt} />
      </div>
    </Section>
  )
}

export default JobInfoArea
