import type { Meta, StoryObj } from "@storybook/react"

import ExperienceSection from "./ExperienceSection"

const meta: Meta<typeof ExperienceSection> = {
  title: "ui/organisms/ExperienceSection",
  component: ExperienceSection,
}

export default meta

type Story = StoryObj<typeof ExperienceSection>

export const Default: Story = {
  args: {
    ...ExperienceSection.defaultProps,
  },
}
