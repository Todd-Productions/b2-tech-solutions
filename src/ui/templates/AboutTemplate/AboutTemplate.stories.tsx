import type { Meta, StoryObj } from "@storybook/react"

import AboutTemplate from "./AboutTemplate"
import { navLinks, footerLinks } from "../../../data/siteMeta"

const meta: Meta<typeof AboutTemplate> = {
  title: "ui/templates/AboutTemplate",
  component: AboutTemplate,
}

export default meta

type Story = StoryObj<typeof AboutTemplate>

export const Default: Story = {
  args: {
    navLinks,
    footerLinks,
    hireMeLink: "/",
    aboutImg: "https://source.unsplash.com/random",
    aboutDescription:
      "An experienced SAP IDM professional and MSCE-certified expert. Develops IDM solutions (v7.1 to v8.0). Available for new projects or long-term positions, offering technical expertise to optimize your environment.",
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
    connectDescription: [
      "Experienced SAP IDM professional and MSCE-certified expert.",
      "Drive your IDM projects to success with my technical expertise.",
    ],
  },
}
