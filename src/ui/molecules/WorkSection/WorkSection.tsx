import React from "react"
import Image from "next/image"
import slugify from "slugify"

import { Section, Wrapper, SectionHeading, ImageCard } from "../../atoms"

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
        <div className="grid xl:grid-cols-2 gap-x-40 mx-4 md:mx-0">
          <SectionHeading>{header}</SectionHeading>
          <div className="flex items-start xl:pt-24 text-xl md:text-3xl text-black-500">
            <Image
              src="/images/blockquote.svg"
              height={50}
              width={50}
              alt="B2 Tech Solutions"
            />
            <p className="pl-8 text-xl">{description}</p>
          </div>
        </div>

        <div className="flex justify-center justify-center items-center flex-wrap gap-8 mt-10">
          {cards.map((card, idx) => (
            <div
              className="justify-self-center w-11/12 lg:w-auto"
              key={slugify(String(idx))}
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
