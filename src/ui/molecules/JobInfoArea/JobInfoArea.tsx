import React from "react"
import slugify from "slugify"

import { Section, SectionSubHeading, JobImageCard } from "../../atoms"
import { IJobInfo } from "../../../types"

export interface JobInfoProps {
  job: IJobInfo
}

const JobInfoArea: React.FC<JobInfoProps> = (props) => {
  const { job } = props
  const { title, timeline, company, bulletPoints, img, excerpt } = job

  return (
    <Section>
      <div className="mb-8 md:mb-32 md:mx-20">
        <div className="grid lg:grid-cols-[1fr_2fr] text-base mb-14">
          <div className="mr-4">
            <SectionSubHeading>{title}</SectionSubHeading>
            <p>{timeline}</p>
            <div className="italic">
              <div dangerouslySetInnerHTML={{ __html: company as string }} />
            </div>
          </div>
          <div>
            <ul>
              {bulletPoints.map((bullet) => (
                <li className="list-disc text-xl" key={slugify(bullet)}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <JobImageCard img={img as string} excerpt={excerpt} />
        </div>
      </div>
    </Section>
  )
}

export default JobInfoArea
