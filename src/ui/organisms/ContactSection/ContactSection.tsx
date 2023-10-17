"use client"

import React, { useState } from "react"

import { Section, SectionSubHeading, Wrapper } from "../../atoms"
import { ContactForm } from "../../molecules"
import "./contact.css"

export interface ContactProps {
  title: string
  phone: string
  email: string
}

const ContactSection: React.FC<ContactProps> = (props) => {
  const { email, phone, title } = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (data: any) => {
    setLoading(true)

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      setSuccess(true)
    } catch (error) {
      console.error("Error while subitting the form:", error)
      setError("Unable to submit form. Please try again")
    }

    setLoading(false)
  }

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
            <ContactForm
              handleSubmission={handleSubmit}
              loading={loading}
              error={error}
              success={success}
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ContactSection
