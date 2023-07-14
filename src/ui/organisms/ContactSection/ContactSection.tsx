import React from "react"

import { Section, Wrapper, SectionSubHeading } from "../../atoms"
import { ContactForm } from "../../molecules"
import { IContactState } from "../../molecules/ContactForm/ContactForm"
import "./contact.css"

export interface ContactProps {
  description?: string
  email: string
  /* eslint-disable-next-line no-unused-vars */
  handleSubmit: (formData: IContactState) => void
}

const ContactSection: React.FC<ContactProps> = (props) => {
  const { email, handleSubmit } = props
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[2fr_1fr] items-start mt-24">
          <div className="bg-black">
            <div className="flex flex-col items-start justify-center my-20 font-bold">
              <h1 className="text-9xl">GET IN</h1>
              <div className="self-center text-9xl">
                <h1 className="green-text">TOUCH</h1>
              </div>
            </div>
            <div className="mb-12">
              <a href="tel:+4733378901" className="email phone">
                <SectionSubHeading>1231231234</SectionSubHeading>
              </a>
            </div>
            <a href={`mailto: ${email}`} className="email">
              <SectionSubHeading>{email}</SectionSubHeading>
            </a>
          </div>
          <div>
            <ContactForm handleSubmission={handleSubmit} />
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ContactSection
