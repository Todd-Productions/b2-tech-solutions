import React from "react"
import Image from "next/image"

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
  const { header, description, cards } = props
  return (
    <Section>
      <Wrapper>
        <div className="content grid xl:grid-cols-2 py-12 gap-x-8">
          <SectionHeading>{header}</SectionHeading>
          <div className="flex items-start md:pt-20 text-xl md:text-3xl text-black-500">
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
