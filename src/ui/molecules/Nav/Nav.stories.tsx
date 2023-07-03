import type { Meta, StoryObj } from "@storybook/react"
import { navLinks } from "../../../data/siteMeta"

import Nav from "./Nav"

const meta: Meta<typeof Nav> = {
  title: "ui/molecules/Nav",
  component: Nav,
}

export default meta

type Story = StoryObj<typeof Nav>

export const Default: Story = {
  args: {
    ...Nav.defaultProps,
    links: navLinks,
  },
}
