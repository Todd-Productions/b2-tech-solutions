import { Meta, Story } from "@storybook/react"

import Drawer, { DrawerProps } from "./Drawer"

import { navLinks } from "../../../data/siteMeta"

export default {
  title: "ui/molecules/Drawer",
  component: Drawer,
} as Meta

const Template: Story<DrawerProps> = (args, { globals }) => (
  <Drawer {...args} {...globals} />
)

export const Default = Template.bind({})
Default.args = {
  ...Drawer.defaultProps,
  links: navLinks,
  isOpen: true,
}
