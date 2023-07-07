import React from "react"

import { Section, Wrapper, SectionSubHeading } from "../../atoms"
import "./contact.css"

export interface ContactProps {
  description: string
  email: string
}

const ContactSection: React.FC<ContactProps> = (props) => {
  const { description, email } = props
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[2fr_1fr] items-center min-h-[75vh]">
          <div>
            <div className="flex flex-col items-start justify-center mb-20">
              <h1 className="text-9xl">GET IN</h1>
              <div className="self-center text-9xl">
                <h1 className="green-text">TOUCH</h1>
              </div>
            </div>
            <a href={`mailto: ${email}`} className="email">
              <SectionSubHeading>{email}</SectionSubHeading>
            </a>
          </div>
          <div>
            <p className="text-2xl text-black-500">{description}</p>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ContactSection
