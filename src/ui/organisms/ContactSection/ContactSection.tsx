import React from "react"

import { Section, Wrapper, SectionSubHeading } from "../../atoms"
import { ContactForm } from "../../molecules"
import { IContactState } from "../../molecules/ContactForm/ContactForm"
import "./contact.css"

export interface ContactProps {
  title: string
  phone: string
  email: string
  /* eslint-disable-next-line no-unused-vars */
  handleSubmit: (formData: IContactState) => void
}

const ContactSection: React.FC<ContactProps> = (props) => {
  const { email, phone, title, handleSubmit } = props
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr] gap-x-10 items-start mt-24 mx-4">
          <div className="bg-black">
            <div className="flex flex-col items-start justify-center my-20 font-bold">
              <h1 className="text-7xl md:text-9xl">
                {title.split(" ")[0]} {title.split(" ")[1]}
              </h1>
              <div className="self-center text-7xl md:text-9xl">
                <h1 className="green-text">{title.split(" ")[2]}</h1>
              </div>
            </div>
            <div className="mb-12">
              <a href={`tel:${phone}`} className="email phone">
                <SectionSubHeading>{phone}</SectionSubHeading>
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
