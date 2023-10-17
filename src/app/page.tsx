"use client"

import { hasCookie, setCookie } from "cookies-next"
import { Metadata, NextPage } from "next"
import { useEffect, useState } from "react"

import { HomeTemplate } from "@/ui/templates"
import getDefaultProps from "../../utils/common"
import data from "../data/home.json"
import { Splash } from "../ui/organisms"

export const metadata: Metadata = {
  title:
    "B2 Tech Solutions: Elevate Your Identity Engineering with Brandon Bollin",
  description: "Drive your IDM/IAM projects to success with Brandon Bollin!",
}

const HomePage: NextPage = () => {
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
    <HomeTemplate
      {...getDefaultProps()}
      bannerImg={data.bannerImage}
      workTitle={data.workTitle}
      workDescription={data.workDescription}
      jobCards={data.jobCards}
      connectTitle={data.connectTitle}
      connectDescription={data.connectDescription}
    />
  ) : (
    <Splash onClick={handleCookies} />
  )
}

export default HomePage
