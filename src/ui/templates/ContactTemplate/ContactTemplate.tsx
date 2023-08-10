import React from "react"

import { ContactSection, MainLayout } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"
import { IContactState } from "../../molecules/ContactForm/ContactForm"

export interface ContactProps extends DefaultProps {
  title: string
  phone: string
  email: string
  /* eslint-disable-next-line no-unused-vars */
  handleSubmit: (formData: IContactState) => void
}

const ContactTemplate: React.FC<ContactProps> = (props) => {
  const { title, phone, email, handleSubmit } = props

  return (
    <MainLayout {...getMainLayoutProps(props)} displayHireMobile>
      <ContactSection
        title={title}
        phone={phone}
        email={email}
        handleSubmit={handleSubmit}
      />
    </MainLayout>
  )
}

export default ContactTemplate
