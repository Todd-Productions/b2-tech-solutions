import React from "react"

import { ContactTemplate } from "../../ui/templates"
import { navLinks, footerLinks, contactLink } from "../../data/siteMeta"
import data from "../../data/contact.json"

const ContactPage = () => (
  <ContactTemplate
    navLinks={navLinks}
    footerLinks={footerLinks}
    hireMeLink={contactLink}
    email={data.email}
    description={data.description}
  />
)

export default ContactPage
