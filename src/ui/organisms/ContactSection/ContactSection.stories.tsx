import type { Meta, StoryObj } from "@storybook/react"

import ContactSection from "./ContactSection"

const meta: Meta<typeof ContactSection> = {
  title: "ui/organisms/ContactSection",
  component: ContactSection,
}

export default meta

type Story = StoryObj<typeof ContactSection>

export const Default: Story = {
  args: {
    email: "email@email.com",
  },
}
