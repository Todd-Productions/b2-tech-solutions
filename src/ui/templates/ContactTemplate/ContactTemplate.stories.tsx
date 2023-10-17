import type { Meta, StoryObj } from "@storybook/react"

import ContactTemplate from "./ContactTemplate"

const meta: Meta<typeof ContactTemplate> = {
  title: "ui/templates/ContactTemplate",
  component: ContactTemplate,
}

export default meta

type Story = StoryObj<typeof ContactTemplate>

export const Default: Story = {
  args: {
    email: "email@email.com",
  },
}
