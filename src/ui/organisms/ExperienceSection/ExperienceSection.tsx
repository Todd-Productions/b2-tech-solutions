import React from "react"
import slugify from "slugify"

import { Section, Wrapper } from "../../atoms"
import { JobInfoArea } from "../../molecules"

import { IJobInfo } from "../../molecules/JobInfoArea/JobInfoArea"

export interface ExperienceProps {
  jobs: IJobInfo[]
}

const ExperienceSection: React.FC<ExperienceProps> = (props) => {
  const { jobs } = props
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[475px_1fr]">
          <div className="bg-black-500 hidden md:block">hello</div>
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
