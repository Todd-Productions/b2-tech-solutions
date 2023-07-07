import type { Meta, StoryObj } from "@storybook/react"

import SectionHeading from "./SectionHeading"

const meta: Meta<typeof SectionHeading> = {
  title: "ui/atoms/SectionHeading",
  component: SectionHeading,
}

export default meta

type Story = StoryObj<typeof SectionHeading>

export const Default: Story = {
  render: (args) => <SectionHeading {...args} />,
  args: {
    children: "work",
  },
}
