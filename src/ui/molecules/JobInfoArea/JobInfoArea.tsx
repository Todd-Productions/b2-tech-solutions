import React from "react"
import slugify from "slugify"

import { Section, SectionSubHeading, JobImageCard } from "../../atoms"
import { UrlType } from "../../../types"

export interface IJobInfo {
  title: string
  timeline: string
  company: string
  bulletPoints: string[]
  img: UrlType
  excerpt: string
}

export interface JobInfoProps {
  job: IJobInfo
}

const JobInfoArea: React.FC<JobInfoProps> = (props) => {
  const { job } = props
  const { title, timeline, company, bulletPoints, img, excerpt } = job

  return (
    <Section>
      <div className="grid md:grid-cols-[1fr_1fr] text-xl">
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
