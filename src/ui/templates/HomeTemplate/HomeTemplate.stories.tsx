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
  },
}
