"use client"

import React from "react"

import { ContactTemplate } from "../../ui/templates"
import getDefaultProps from "../../../utils/common"
import data from "../../data/contact.json"

const handleSubmit = async (formData: any) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    return res
  } catch (error) {
    console.error("Error while subitting the form:", error)
  }
  return formData
}

const ContactPage = () => (
  <ContactTemplate
    {...getDefaultProps()}
    email={data.email}
    description={data.description}
    handleSubmit={handleSubmit}
  />
)

export default ContactPage
