import type { Meta, StoryObj } from "@storybook/react"

import ExperienceSidebar from "./ExperienceSidebar"

const meta: Meta<typeof ExperienceSidebar> = {
  title: "ui/molecules/ExperienceSidebar",
  component: ExperienceSidebar,
}

export default meta

type Story = StoryObj<typeof ExperienceSidebar>

export const Default: Story = {
  args: {
    years: [2017, 2016, 2014, 2008, 2007],
  },
}
