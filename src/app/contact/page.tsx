import React from "react"

import { ContactTemplate } from "../../ui/templates"
import { navLinks, footerLinks, contactLink } from "../../data/siteMeta"

const ContactPage = () => (
  <ContactTemplate
    navLinks={navLinks}
    footerLinks={footerLinks}
    hireMeLink={contactLink}
    email="email@email.com"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend aliquet felis, ac aliquet massa pulvinar quis. Quisque sem urna, facilisis vitae libero et, consequat suscipit nulla."
  />
)

export default ContactPage
