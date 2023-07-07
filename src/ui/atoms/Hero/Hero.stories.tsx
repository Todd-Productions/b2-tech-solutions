import type { Meta, StoryObj } from "@storybook/react"

import Hero from "./Hero"

const meta: Meta<typeof Hero> = {
  title: "ui/atoms/Hero",
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  render: (args: any) => <Hero {...args} />,
  args: {
    img: "https://source.unsplash.com/random",
    children: <div>b2 tech solutions</div>,
  },
}
