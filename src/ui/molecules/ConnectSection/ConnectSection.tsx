import React from "react"
import Link from "next/link"

import { Section, SectionHeading, Button } from "../../atoms"

import { UrlType } from "../../../types"
import "./connect.css"

export interface ConnectProps {
  title?: string
  description: string[]
  hireLink: UrlType
}

const ConnectSection: React.FC<ConnectProps> = (props) => {
  const { title, description, hireLink } = props
  return (
    <Section>
      <div className="flex flex-col items-center justify-center connect-container">
        <SectionHeading>
          {title?.split(" ")[0]} <span className="green-heading">connect</span>
        </SectionHeading>
        <div className="my-10">
          {description.map((line) => (
            <p className="font-bold py-1">{line}</p>
          ))}
        </div>
        <Link href={hireLink}>
          <Button>hire me</Button>
        </Link>
      </div>
    </Section>
  )
}

ConnectSection.defaultProps = {
  title: "let's connect",
}

export default ConnectSection
