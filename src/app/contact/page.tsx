"use client"

import React from "react"

import { ContactTemplate } from "../../ui/templates"
import getDefaultProps from "../../../utils/common"
import data from "../../data/contact.json"

const ContactPage = () => (
  <ContactTemplate
    {...getDefaultProps()}
    email={data.email}
    description={data.description}
  />
)

export default ContactPage
