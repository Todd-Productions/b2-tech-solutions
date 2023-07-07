import type { Meta, StoryObj } from "@storybook/react"

import ContactSection from "./ContactSection"

const meta: Meta<typeof ContactSection> = {
  title: "ui/molecules/ContactSection",
  component: ContactSection,
}

export default meta

type Story = StoryObj<typeof ContactSection>

export const Default: Story = {
  args: {
    email: "email@email.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend aliquet felis, ac aliquet massa pulvinar quis. Quisque sem urna, facilisis vitae libero et, consequat suscipit nulla.",
  },
}
