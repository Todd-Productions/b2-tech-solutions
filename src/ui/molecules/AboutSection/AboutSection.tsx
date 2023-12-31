import React from "react"
import Image from "next/image"
import slugify from "slugify"

import {
  Section,
  Wrapper,
  Button,
  SectionHeading,
  SectionSubHeading,
} from "../../atoms"
import { UrlType } from "../../../types"
import "./about.css"

export interface AboutProps {
  header: string
  subHeader: string
  img: UrlType
  description: string[]
}

const AboutSection: React.FC<AboutProps> = (props) => {
  const { img, description, header, subHeader } = props

  return (
    <Section>
      <Wrapper>
        <div className="text-center mt-20 mb-12">
          <SectionHeading tag="h1">{header}</SectionHeading>
        </div>
        <div className="grid gap-x-24 md:mb-20 justify-center lg:grid-cols-[1fr_1fr]">
          <div className="mx-10 md:ml-12">
            <div className="relative img-container">
              <div className="light-card" />
              <div className="dark-card" />
              <Image
                className="about-img object-cover "
                src={img as string}
                alt="Brandon"
                fill
                priority
              />
            </div>
          </div>

          <div className="pl-8 mt-32">
            <SectionSubHeading textGreen>{subHeader}</SectionSubHeading>
            <div className="my-12 text-black-500 text-lg md:text-2xl text-content ">
              {description.map((point, idx) => (
                <p key={slugify(String(idx))}>{point}</p>
              ))}
            </div>
            <a
              href="/pdfs/brandon-a-bollin.pdf"
              target="_blank"
              className="resume-btn"
            >
              <Button>DOWNLOAD RESUME</Button>
            </a>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default AboutSection
