import React from "react"
import "./globals.css"
// eslint-disable-next-line camelcase
import { Bebas_Neue, Roboto } from "next/font/google"
import type { Metadata } from "next"

//  Figma - font-family: Formula Condensed;
// eslint-disable-next-line camelcase
const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

// Figma - font-family: Neue Montreal;
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "B2 Tech Solutions",
  description: "",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    // eslint-disable-next-line camelcase
    <html lang="en" className={`${bebas_neue.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
