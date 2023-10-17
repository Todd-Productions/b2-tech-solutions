"use client"

import { hasCookie, setCookie } from "cookies-next"
import { NextPage } from "next"
import { useEffect, useState } from "react"

import { HomeTemplate } from "@/ui/templates"
import Head from "next/head"
import getDefaultProps, { getCanonicalLink } from "../../utils/common"
import data from "../data/home.json"
import { Splash } from "../ui/organisms"

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

  return (
    <>
      <Head>
        <link rel="canonical" href={getCanonicalLink("")} />
      </Head>
      {userVisited ? (
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
      )}
    </>
  )
}

export default HomePage
