"use client"

import { useState } from "react"

import getDefaultProps from "../../../utils/common"
import data from "../../data/contact.json"
import { ContactTemplate } from "../../ui/templates"

const ContactPage = () => {
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
    <>
      <title>Contact B² Tech Solutions for Expert Solutions</title>
      <meta name="description" content="Get in touch with B² Tech Solutions" />

      <ContactTemplate
        {...getDefaultProps()}
        title={data.title}
        phone={data.phone}
        email={data.email}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
        success={success}
      />
    </>
  )
}

export default ContactPage
