import React from "react"
import slugify from "slugify"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "../../atoms"

import "./sidebar.css"

export interface ExperienceProps {
  years: string[] | number[]
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === "Enter") {
    scrollToTop()
  }
}

const ExperienceSidebar: React.FC<ExperienceProps> = (props) => {
  const { years } = props
  return (
    <div className="flex flex-col items-start justify-center text-5xl">
      <div className="years-list">
        {years.map((year) => (
          <div className="pb-6 text-grey-600" key={slugify(String(year))}>
            {year}
          </div>
        ))}
      </div>

      <div
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="p-6 h-20 w-20 text-center flex justify-center items-center rounded-full bg-green-600 text-white mt-20"
      >
        <Icon icon={faArrowUp} />
      </div>
    </div>
  )
}

export default ExperienceSidebar
