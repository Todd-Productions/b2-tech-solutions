import React from "react"
import Link from "next/link"
import slugify from "slugify"

import { Section, SectionHeading, Button } from "../../atoms"
import "./connect.css"

import { INavLink } from "../../../types"

export interface ConnectProps {
  header?: string
  description: string[]
  hireLink: INavLink
}

const ConnectSection: React.FC<ConnectProps> = (props) => {
  const { header, description, hireLink } = {
    header: "let's connect",
    ...props,
  }
  return (
    <Section>
      <div className="connect-container text-center mx-4 md:mb-24">
        <SectionHeading>
          {header?.split(" ")[0]} <span className="green-heading">connect</span>
        </SectionHeading>
        <div className="mb-6 md:mb-10">
          {description.map((line) => (
            <p className="font-bold py-1" key={slugify(line)}>
              {line}
            </p>
          ))}
        </div>
        <div className="mx-auto w-fit">
          <Link href={hireLink.url}>
            <Button includeArrow>{hireLink.label}</Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default ConnectSection
