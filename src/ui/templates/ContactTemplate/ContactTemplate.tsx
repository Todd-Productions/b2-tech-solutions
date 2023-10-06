import React from "react"

import { IContactState } from "../../molecules/ContactForm/ContactForm"
import { ContactSection, MainLayout } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"

export interface ContactProps extends DefaultProps {
  title: string
  phone: string
  email: string
  /* eslint-disable-next-line no-unused-vars */
  handleSubmit: (formData: IContactState) => void
  loading: boolean
  error: undefined | string
  success: boolean
}

const ContactTemplate: React.FC<ContactProps> = (props) => {
  const { title, phone, email, handleSubmit, loading, error, success } = props

  return (
    <MainLayout {...getMainLayoutProps(props)} displayHireMobile>
      <ContactSection
        title={title}
        phone={phone}
        email={email}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
        success={success}
      />
    </MainLayout>
  )
}

export default ContactTemplate
