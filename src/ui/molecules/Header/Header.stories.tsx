import type { Meta, StoryObj } from "@storybook/react"

import { navLinks } from "../../../data/siteMeta"

import Header from "./Header"

const meta: Meta<typeof Header> = {
  title: "ui/molecules/Header",
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    ...Header.defaultProps,
    links: navLinks,
    hireLink: "/",
  },
}
