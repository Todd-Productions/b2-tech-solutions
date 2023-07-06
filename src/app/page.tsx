import React from "react"

import { HomeTemplate } from "../ui/templates"
// import { Splash } from "../ui/organisms"
import { navLinks, footerLinks } from "../data/siteMeta"

const HomePage = () => (
  <HomeTemplate
    navLinks={navLinks}
    footerLinks={footerLinks}
    hireMeLink="/"
    bannerImg="https://source.unsplash.com/random"
    title="b2 tech solutions"
    workDescription="Explore our transformative consulting projects in SAP IDM, led by Brandon, an experienced SAP IDM professional and MSCE-certified expert."
    jobCards={[
      {
        img: "https://source.unsplash.com/random",
        excerpt: "upgrade of sap idm migration and from v7.1 to v8.0",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "idm implementation for manufacturing company",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "upgrade of sap idm migration and from v7.1 to v8.0",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "idm implementation for manufacturing company",
        projectLink: "/",
      },
    ]}
    connectDescription={[
      "Experienced SAP IDM professional and MSCE-certified expert.",
      "Drive your IDM projects to success with my technical expertise.",
    ]}
  />
)

export default HomePage
