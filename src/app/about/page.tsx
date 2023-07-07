"use client"

import React from "react"

import { AboutTemplate } from "../../ui/templates"
import { navLinks, footerLinks, contactLink } from "../../data/siteMeta"

const AboutPage = () => (
  <AboutTemplate
    navLinks={navLinks}
    footerLinks={footerLinks}
    hireMeLink={contactLink}
    aboutImg="https://source.unsplash.com/random"
    aboutDescription="An experienced SAP IDM professional and MSCE-certified expert. Develops IDM solutions (v7.1 to v8.0). Available for new projects or long-term positions, offering technical expertise to optimize your environment."
    connectDescription={[
      "Experienced SAP IDM professional and MSCE-certified expert.",
      "Drive your IDM projects to success with my technical expertise.",
    ]}
    jobs={[
      {
        title: "Senior Consultant",
        timeline: "Aug 2017 - Mar 2019",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Developer Consultant",
        timeline: "Apr 2016 - Jul 2017",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Owner",
        timeline: "Jul 2014 - Oct 2014",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Administrator",
        timeline: "Oct 2008 - May 2013",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
    ]}
  />
)

export default AboutPage
