import React from "react"
import Image from "next/image"
import slugify from "slugify"

import { Section, Wrapper, SectionHeading, ImageCard } from "../../atoms"
import "./worksection.css"

// @types
import { IImageCard } from "../../../types"

export interface WorkProps {
  header?: string
  description: string
  cards: IImageCard[]
}

const WorkSection: React.FC<WorkProps> = (props) => {
  const { header, description, cards } = { header: "work.", ...props }
  return (
    <Section>
      <Wrapper>
        <div className="content grid xl:grid-cols-2 gap-x-40">
          <SectionHeading>{header}</SectionHeading>
          <div className="flex items-start xl:pt-24 text-xl md:text-3xl text-black-500">
            <Image
              src="/images/blockquote.svg"
              height={50}
              width={50}
              alt="B2 Tech Solutions"
            />
            <p className="pl-8">{description}</p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-between items-center flex-wrap gap-y-8">
          {cards.map((card) => (
            <div
              className="justify-self-center w-4/5 h-60 lg:w-auto lg:h-auto"
              key={slugify(card.excerpt)}
            >
              <ImageCard card={card} />
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default WorkSection
