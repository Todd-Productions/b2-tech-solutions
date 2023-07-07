import type { Meta, StoryObj } from "@storybook/react"

import ContactTemplate from "./ContactTemplate"
import { navLinks, footerLinks } from "../../../data/siteMeta"

const meta: Meta<typeof ContactTemplate> = {
  title: "ui/templates/ContactTemplate",
  component: ContactTemplate,
}

export default meta

type Story = StoryObj<typeof ContactTemplate>

export const Default: Story = {
  args: {
    navLinks,
    footerLinks,
    hireMeLink: "/",
    email: "email@email.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend aliquet felis, ac aliquet massa pulvinar quis. Quisque sem urna, facilisis vitae libero et, consequat suscipit nulla.",
  },
}
