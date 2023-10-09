"use client"

import React, { useEffect, useState } from "react"
import { setCookie, hasCookie } from "cookies-next"

import { HomeTemplate } from "../ui/templates"
import { Splash } from "../ui/organisms"
import getDefaultProps from "../../utils/common"
import data from "../data/home.json"

const HomePage = () => {
  const [userVisited, setUserVisited] = useState(true)

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
    <>
      <title>
        B2 Tech Solutions: Elevate Your Identity Engineering with Brandon Bollin
      </title>
      <meta
        name="description"
        content="Drive your IDM/IAM projects to success with Brandon Bollin!"
      />

      <HomeTemplate
        {...getDefaultProps()}
        bannerImg={data.bannerImage}
        workTitle={data.workTitle}
        workDescription={data.workDescription}
        jobCards={data.jobCards}
        connectTitle={data.connectTitle}
        connectDescription={data.connectDescription}
      />
    </>
  ) : (
    <Splash onClick={handleCookies} />
  )
}

export default HomePage
