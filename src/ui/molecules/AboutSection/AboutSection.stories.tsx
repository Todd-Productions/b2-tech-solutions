import type { Meta, StoryObj } from "@storybook/react"

import AboutSection from "./AboutSection"

const meta: Meta<typeof AboutSection> = {
  title: "ui/molecules/AboutSection",
  component: AboutSection,
}

export default meta

type Story = StoryObj<typeof AboutSection>

export const Default: Story = {
  args: {
    img: "https://source.unsplash.com/random",
    description: [
      "An experienced SAP IDM professional and MSCE-certified expert. Develops IDM solutions (v7.1 to v8.0). Available for new projects or long-term positions, offering technical expertise to optimize your environment.",
    ],
  },
}
