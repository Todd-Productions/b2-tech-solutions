import React from "react"
import slugify from "slugify"

import { Section, Wrapper } from "../../atoms"
import { JobInfoArea, ExperienceSidebar } from "../../molecules"

import { IJobInfo } from "../../molecules/JobInfoArea/JobInfoArea"

export interface ExperienceProps {
  jobs: IJobInfo[]
}

const ExperienceSection: React.FC<ExperienceProps> = (props) => {
  const { jobs } = props

  const getJobYears = (data: ExperienceProps) =>
    data.jobs.map((job) => job.timeline.split(" - ")[1].split(" ")[1])

  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[475px_1fr]">
          <div className="hidden md:block">
            <div className="sticky top-40">
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
