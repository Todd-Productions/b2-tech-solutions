import type { Meta, StoryObj } from "@storybook/react"
import { footerLinks } from "../../../data/siteMeta"

import Footer from "./Footer"

const meta: Meta<typeof Footer> = {
  title: "ui/molecules/Footer",
  component: Footer,
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    ...Footer.defaultProps,
    links: footerLinks,
  },
}
