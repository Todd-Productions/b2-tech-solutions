import React from "react"
import Image from "next/image"

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
  img: UrlType
  description: string
}

const AboutSection: React.FC<AboutProps> = (props) => {
  const { img, description } = props

  return (
    <Section>
      <Wrapper>
        <div className="text-center mt-20 mb-12">
          <SectionHeading>about.</SectionHeading>
        </div>
        <div className="grid gap-x-24 md:grid-cols-[1fr_1fr]">
          <div className="relative img-container mx-10 mb-20">
            <div className="light-card" />
            <div className="dark-card" />
            <Image
              className="about-img object-cover "
              src={img as string}
              alt="Brandon"
              fill
            />
          </div>

          <div className="pl-8">
            <SectionSubHeading textGreen>Who&apos;s Brandon?</SectionSubHeading>
            <p className="my-12 text-black-500 text-3xl md:text-5xl text-content leading-2!">
              {description}
            </p>
            <div className="resume-btn">
              <Button>DOWNLOAD RESUME</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default AboutSection
