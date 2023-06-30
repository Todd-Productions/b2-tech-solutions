import type { Meta, StoryObj } from "@storybook/react"

import JobImageCard from "./JobImageCard"

const meta: Meta<typeof JobImageCard> = {
  title: "ui/atoms/JobImageCard",
  component: JobImageCard,
}

export default meta

type Story = StoryObj<typeof JobImageCard>

export const Default: Story = {
  render: (args) => <JobImageCard {...args} />,
  args: {
    img: "https://source.unsplash.com/random",
    excerpt:
      "INVENTY NORTH AMERICA, INC., JERSEY CITY, NJ / MONTRÉAL, QUÉBEC, CANADA",
  },
}
