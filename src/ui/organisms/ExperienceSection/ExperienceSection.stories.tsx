import type { Meta, StoryObj } from "@storybook/react"

import ExperienceSection from "./ExperienceSection"

const meta: Meta<typeof ExperienceSection> = {
  title: "ui/organisms/ExperienceSection",
  component: ExperienceSection,
}

export default meta

type Story = StoryObj<typeof ExperienceSection>

export const Default: Story = {
  args: {
    ...ExperienceSection.defaultProps,
    jobs: [
      {
        title: "Senior Consultant",
        timeline: "Aug 2017 - Mar 2019",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Developer Consultant",
        timeline: "Apr 2016 - Jul 2017",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Owner",
        timeline: "Jul 2014 - Oct 2014",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
      {
        title: "Administrator",
        timeline: "Oct 2008 - May 2013",
        company: "Invently NA, Inc.",
        bulletPoints: [
          "SAP ID Senior Developer Consultant",
          "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
        ],
        img: "https://source.unsplash.com/random",
        excerpt:
          "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
      },
    ],
  },
}
