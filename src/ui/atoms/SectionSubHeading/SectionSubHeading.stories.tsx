import type { Meta, StoryObj } from "@storybook/react"

import SectionSubHeading from "./SectionSubHeading"

const meta: Meta<typeof SectionSubHeading> = {
  title: "ui/atoms/SectionSubHeading",
  component: SectionSubHeading,
}

export default meta

type Story = StoryObj<typeof SectionSubHeading>

export const Default: Story = {
  render: (args) => <SectionSubHeading {...args} />,
  args: {
    ...SectionSubHeading.defaultProps,
    children: "Sub Heading",
  },
}
