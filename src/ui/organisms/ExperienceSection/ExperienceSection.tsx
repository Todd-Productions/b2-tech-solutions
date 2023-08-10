import React from "react"
import slugify from "slugify"

import { Section, Wrapper } from "../../atoms"
import { JobInfoArea, ExperienceSidebar } from "../../molecules"

import { IJobInfo } from "../../../types"

export interface ExperienceProps {
  jobs: IJobInfo[]
}

const ExperienceSection: React.FC<ExperienceProps> = (props) => {
  const { jobs } = props

  const getJobYears = (data: ExperienceProps) => {
    const uniqueYears: string[] = []
    data.jobs.forEach((job) => {
      if (uniqueYears[uniqueYears.length - 1] !== job.timeline.split(" ")[1])
        uniqueYears.push(job.timeline.split(" ")[1])
    })
    return uniqueYears
  }

  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[375px_1fr] mx-4 md:mx-0">
          <div className="hidden md:block">
            <div className="sticky top-40 pl-4 z-10">
              <ExperienceSidebar years={getJobYears(props)} />
            </div>
          </div>
          <div className="pl-4">
            {jobs.map((job) => (
              <JobInfoArea job={job} key={slugify(job.company)} />
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ExperienceSection
