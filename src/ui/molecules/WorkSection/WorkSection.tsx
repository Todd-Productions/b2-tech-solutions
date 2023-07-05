import React from "react"

import Image from "next/image"
import { Section, Wrapper, SectionHeading, ImageCard } from "../../atoms"

// @types
import { IImageCard } from "../../atoms/ImageCard/ImageCard"

export interface WorkProps {
  header?: string
  description: string
  cards: IImageCard[]
}

const WorkSection: React.FC<WorkProps> = (props) => {
  const { header, description, cards } = props
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-2 py-12">
          <SectionHeading>{header}</SectionHeading>
          <div className="flex items-start pt-6">
            <Image
              src="/images/blockquote.svg"
              height={50}
              width={50}
              alt="B2 Tech Solutions"
            />
            <p className="pl-8">{description}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {cards.map((card) => (
            <div className="justify-self-center w-4/5 h-60 lg:w-auto lg:h-auto">
              <ImageCard card={card} />
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

WorkSection.defaultProps = {
  header: "work.",
}

export default WorkSection
