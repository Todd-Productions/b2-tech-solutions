import React, { ReactNode } from "react"
import slugify from "slugify"
import Image from "next/image"

import "./services.css"

import {
  Section,
  Wrapper,
  SectionSubHeading,
  SectionHeading,
} from "../../atoms"

interface IService {
  heading: string
  content: ReactNode
  img?: string
}

export interface ServicesProps {
  heading: string
  services: IService[]
}

const ServicesSection: React.FC<ServicesProps> = (props) => {
  const { heading, services } = props

  return (
    <Section>
      <Wrapper>
        <div className="mt-40 sm:mt-32 mx-20">
          <SectionHeading tag="h1" size="small">
            {heading}
          </SectionHeading>
          <ul className="pl-4 mt-8">
            {services.map((service) => (
              <li className="pb-8" key={slugify(String(service.heading))}>
                <div className="grid items-center justify-items-center gap-12 lg:grid-cols-[3fr_1fr]">
                  <div>
                    <SectionSubHeading>{service.heading}</SectionSubHeading>
                    <div
                      className="leading-10 service-content"
                      dangerouslySetInnerHTML={{
                        __html: service.content as string,
                      }}
                    />
                  </div>
                  {service.img && (
                    <div className="relative w-80 h-80 rounded-full">
                      <Image
                        className="object-cover rounded-full"
                        src={service.img}
                        alt=""
                        fill
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ServicesSection
