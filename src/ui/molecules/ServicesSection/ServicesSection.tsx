import React from "react"

import { Section, Wrapper } from "../../atoms"

export interface ExperienceProps {}

const ExperienceSection: React.FC<ExperienceProps> = () => (
  // const { jobs } = props

  <Section>
    <Wrapper>
      <div className="">
        <ul className="pl-4">
          {/* {jobs.map((job) => (
              <li key={slugify(String(job.company))}>
                <JobInfoArea job={job} key={slugify(job.company as string)} />
              </li>
            ))} */}
        </ul>
      </div>
    </Wrapper>
  </Section>
)

export default ExperienceSection
