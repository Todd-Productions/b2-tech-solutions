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
    hireMeLink: { label: "Instagram", url: "/" },
    email: "email@email.com",
  },
}
