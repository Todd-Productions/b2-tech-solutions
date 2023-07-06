import type { Meta, StoryObj } from "@storybook/react"

import HomeTemplate from "./HomeTemplate"
import { navLinks, footerLinks } from "../../../data/siteMeta"

const meta: Meta<typeof HomeTemplate> = {
  title: "ui/templates/HomeTemplate",
  component: HomeTemplate,
}

export default meta

type Story = StoryObj<typeof HomeTemplate>

export const Default: Story = {
  args: {
    ...HomeTemplate.defaultProps,
    navLinks,
    footerLinks,
    hireMeLink: "/",
    jobCards: [
      {
        img: "https://source.unsplash.com/random",
        excerpt: "upgrade of sap idm migration and from v7.1 to v8.0",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "idm implementation for manufacturing company",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "upgrade of sap idm migration and from v7.1 to v8.0",
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: "idm implementation for manufacturing company",
        projectLink: "/",
      },
    ],
    bannerImg: "https://source.unsplash.com/random",
    title: "b2 tech solutions",
    workDescription:
      "Explore our transformative consulting projects in SAP IDM, led by Brandon, an experienced SAP IDM professional and MSCE-certified expert.",
    connectDescription: [
      "Experienced SAP IDM professional and MSCE-certified expert.",
      "Drive your IDM projects to success with my technical expertise.",
    ],
  },
}
