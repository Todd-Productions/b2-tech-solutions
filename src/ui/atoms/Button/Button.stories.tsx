import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "ui/atoms/Button",
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    ...Button.defaultProps,
    children: "I'm A Button",
  },
}
