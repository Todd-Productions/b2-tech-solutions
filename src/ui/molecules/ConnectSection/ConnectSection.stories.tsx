import type { Meta, StoryObj } from "@storybook/react"

import { contactLink } from "../../../data/siteMeta"
import ConnectSection from "./ConnectSection"

const meta: Meta<typeof ConnectSection> = {
  title: "ui/molecules/ConnectSection",
  component: ConnectSection,
}

export default meta

type Story = StoryObj<typeof ConnectSection>

export const Default: Story = {
  args: {
    description: [
      "Experienced SAP IDM professional and MSCE-certified expert.",
      "Drive your IDM projects to success with my technical expertise.",
    ],
    hireLink: contactLink,
  },
}
