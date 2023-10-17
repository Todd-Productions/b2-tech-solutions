import type { Meta, StoryObj } from "@storybook/react"

import MainLayout from "./MainLayout"

const meta: Meta<typeof MainLayout> = {
  title: "ui/organisms/MainLayout",
  component: MainLayout,
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Default: Story = {
  args: {},
}
