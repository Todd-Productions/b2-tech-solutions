import type { Meta, StoryObj } from "@storybook/react"

import WorkSection from "./WorkSection"

const meta: Meta<typeof WorkSection> = {
  title: "ui/molecules/WorkSection",
  component: WorkSection,
}

export default meta

type Story = StoryObj<typeof WorkSection>

export const Default: Story = {
  args: {
    description:
      "Explore our transformative consulting projects in SAP IDM, led by Brandon, an experienced SAP IDM professional and MSCE-certified expert.",
    cards: [
      {
        img: "https://source.unsplash.com/random",
        excerpt: ["upgrade of sap idm migration and from v7.1 to v8.0"],
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: ["idm implementation for manufacturing company"],
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: ["upgrade of sap idm migration and from v7.1 to v8.0"],
        projectLink: "/",
      },
      {
        img: "https://source.unsplash.com/random",
        excerpt: ["idm implementation for manufacturing company"],
        projectLink: "/",
      },
    ],
  },
}
