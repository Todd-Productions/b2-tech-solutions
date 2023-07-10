"use client"

import React from "react"

import { AboutTemplate } from "../../ui/templates"
import { navLinks, footerLinks, contactLink } from "../../data/siteMeta"
import data from "../../data/about.json"

const AboutPage = () => (
  <AboutTemplate
    navLinks={navLinks}
    footerLinks={footerLinks}
    hireMeLink={contactLink}
    aboutImg={data.aboutImg}
    aboutDescription={data.aboutDescription}
    connectDescription={data.connectDescription}
    jobs={data.jobs}
  />
)

export default AboutPage
