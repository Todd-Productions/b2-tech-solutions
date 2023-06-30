import type { Meta, StoryObj } from "@storybook/react";

import ImageCard from "./ImageCard";

const meta: Meta<typeof ImageCard> = {
  title: "ui/atoms/ImageCard",
  component: ImageCard,
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  render: (args: any) => <ImageCard {...args} />,
  args: {
    ...ImageCard.defaultProps,
    img: "https://source.unsplash.com/random",
  },
};
