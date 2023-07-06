import React from "react"
import Image from "next/image"

import { Section, Wrapper, Button, SectionSubHeading } from "../../atoms"
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
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <Image
              className="about-img object-contain"
              src={img as string}
              alt="Brandon"
              fill
            />
          </div>

          <div>
            <SectionSubHeading>Who&apos;s Brandon?</SectionSubHeading>
            <p className="my-12 text-black-500 text-2xl md:text-4xl">
              {description}
            </p>
            <Button>download resume</Button>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default AboutSection
