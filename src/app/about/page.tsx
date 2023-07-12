"use client"

import React from "react"

import { AboutTemplate } from "../../ui/templates"
import getDefaultProps from "../../../utils/common"
import data from "../../data/about.json"

const AboutPage = () => (
  <AboutTemplate
    {...getDefaultProps()}
    aboutImg={data.aboutImg}
    aboutDescription={data.aboutDescription}
    connectDescription={data.connectDescription}
    jobs={data.jobs}
  />
)

export default AboutPage
