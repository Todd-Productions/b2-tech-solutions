import type { Meta, StoryObj } from "@storybook/react"

import MainLayout from "./MainLayout"
import { navLinks, footerLinks, contactLink } from "../../../data/siteMeta"

const meta: Meta<typeof MainLayout> = {
  title: "ui/organisms/MainLayout",
  component: MainLayout,
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Default: Story = {
  args: {
    ...MainLayout.defaultProps,
    navLinks,
    footerLinks,
    hireLink: contactLink,
  },
}
