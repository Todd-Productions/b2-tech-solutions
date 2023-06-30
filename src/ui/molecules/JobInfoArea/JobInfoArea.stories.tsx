import type { Meta, StoryObj } from "@storybook/react"

import JobInfoArea from "./JobInfoArea"

const meta: Meta<typeof JobInfoArea> = {
  title: "ui/moleculs/JobInfoArea",
  component: JobInfoArea,
}

export default meta

type Story = StoryObj<typeof JobInfoArea>

export const Default: Story = {
  args: {
    ...JobInfoArea.defaultProps,
    title: "Senior Consultant",
    timeline: "Aug 2017 - Mar 2019",
    company: "Invently NA, Inc.",
    bulletPoints: [
      "SAP ID Senior Developer Consultant",
      "SAP Consulting firm, Global HQ - Nice, France, serving clients in Canada, France, Switzerland and beyond.",
    ],
  },
}
