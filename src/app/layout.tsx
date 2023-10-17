import { Metadata } from "next"
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

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Identity Access Management Consultant | B2 Technical Solutions",
  description:
    "Privileged access management solutions, SailPoint IdentityIQ, IDM / IAM Consultant with B2 Technical Solutions",
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
