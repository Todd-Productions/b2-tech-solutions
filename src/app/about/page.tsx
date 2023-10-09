"use client"

import React from "react"

import { AboutTemplate } from "../../ui/templates"
import getDefaultProps from "../../../utils/common"
import data from "../../data/about.json"

const AboutPage = () => (
  <>
    <title>About B² Technical Solutions</title>
    <meta name="description" content="Who's Brandon? What is B²?" />

    <AboutTemplate
      {...getDefaultProps()}
      aboutHeading={data.title}
      aboutSubheading={data.subtitle}
      aboutImg={data.aboutImg}
      aboutDescription={data.aboutDescription}
      educationHeader={data.educationHeader}
      educationHistory={data.education}
      connectDescription={data.connectDescription}
      jobs={data.jobs}
    />
  </>
)

export default AboutPage
