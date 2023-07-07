import React from "react"
import Link from "next/link"
import slugify from "slugify"

import { Section, SectionHeading, Button } from "../../atoms"

import { INavLink } from "../../../types"
import "./connect.css"

export interface ConnectProps {
  title?: string
  description: string[]
  hireLink: INavLink
}

const ConnectSection: React.FC<ConnectProps> = (props) => {
  const { title, description, hireLink } = { title: "let's connect", ...props }
  return (
    <Section>
      <div className="connect-container text-center">
        <SectionHeading>
          {title?.split(" ")[0]} <span className="green-heading">connect</span>
        </SectionHeading>
        <div className="my-6 md:my-10">
          {description.map((line) => (
            <p className="font-bold py-1" key={slugify(line)}>
              {line}
            </p>
          ))}
        </div>
        <Link href={hireLink.url}>
          <Button>{hireLink.label}</Button>
        </Link>
      </div>
    </Section>
  )
}

export default ConnectSection
