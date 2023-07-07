import React from "react"

import { ContactSection } from "../../molecules"
import { MainLayout } from "../../organisms"
import { DefaultProps, getMainLayoutProps } from "../HomeTemplate/HomeTemplate"

export interface ContactProps extends DefaultProps {
  description: string
  email: string
}

const ContactTemplate: React.FC<ContactProps> = (props) => {
  const { description, email } = props

  return (
    <MainLayout {...getMainLayoutProps(props)}>
      <ContactSection description={description} email={email} />
    </MainLayout>
  )
}

export default ContactTemplate
