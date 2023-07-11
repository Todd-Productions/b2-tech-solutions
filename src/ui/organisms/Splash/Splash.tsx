import React from "react"

import Image from "next/image"
import { Button } from "../../atoms"
import "./splash.css"

export interface SplashProps {
  onClick: () => void
}

const Splash: React.FC<SplashProps> = (props) => {
  const { onClick } = props

  return (
    <div className="splash">
      <div className="mb-40">
        <Image
          src="/images/logo-white.svg"
          height={150}
          width={150}
          alt="B2 Tech Solutions"
        />
      </div>

      <div className="btn-container">
        <Button onClick={onClick} color="black" includeArrow>
          start now
        </Button>
      </div>
    </div>
  )
}

export default Splash
