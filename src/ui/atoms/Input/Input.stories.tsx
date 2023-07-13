import type { Meta, StoryObj } from "@storybook/react"

import Input from "./Input"

const meta: Meta<typeof Input> = {
  title: "ui/atoms/Input",
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args: any) => <Input {...args} />,
  args: {
    ...Input.defaultProps,
    label: "Label",
  },
}
