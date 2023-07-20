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
        <div className="grid gap-x-24 md:mb-20 justify-center md:grid-cols-[1fr_1fr]">
          <div className="mx-10 md:ml-12">
            <div className="relative img-container">
              <div className="light-card" />
              <div className="dark-card" />
              <Image
                className="about-img object-cover "
                src={img as string}
                alt="Brandon"
                fill
              />
            </div>
          </div>

          <div className="pl-8 mt-32">
            <SectionSubHeading textGreen>Who&apos;s Brandon?</SectionSubHeading>
            <p className="my-12 text-black-500 text-lg md:text-2xl text-content ">
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
