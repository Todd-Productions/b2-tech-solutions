import type { Metadata } from "next"
import { Bebas_Neue as Bebas, Roboto } from "next/font/google"
import Script from "next/script"
import React from "react"

import "./globals.css"

//  Figma - font-family: Formula Condensed;
const babas = Bebas({
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

  const { NEXT_PUBLIC_GA_CODE } = process.env

  return (
    <html lang="en" className={`${babas.variable} ${roboto.variable}`}>
      {NEXT_PUBLIC_GA_CODE && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_CODE}`}
          />

          <Script id="google-analytics">
            {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${NEXT_PUBLIC_GA_CODE}', {
           page_path: window.location.pathname,
           });
        `}
          </Script>
        </>
      )}

      <body>{children}</body>
    </html>
  )
}

export default RootLayout
