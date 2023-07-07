"use client"

import React, { useEffect, useState } from "react"
import { setCookie, hasCookie } from "cookies-next"

import { HomeTemplate } from "../ui/templates"
import { Splash } from "../ui/organisms"
import { navLinks, footerLinks, contactLink } from "../data/siteMeta"

const HomePage = () => {
  const [userVisited, setUserVisited] = useState(false)

  const handleCookies = () => {
    setCookie("userVisited", true)
    setUserVisited(true)
  }

  useEffect(() => {
    if (hasCookie("userVisited")) {
      setUserVisited(true)
    } else {
      setUserVisited(false)
    }
  }, [])

  return userVisited ? (
    <HomeTemplate
      navLinks={navLinks}
      footerLinks={footerLinks}
      hireMeLink={contactLink}
      bannerImg="https://source.unsplash.com/random"
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
  ) : (
    <Splash onClick={handleCookies} />
  )
}

export default HomePage
