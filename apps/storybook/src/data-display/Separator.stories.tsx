import type { Meta, StoryObj } from "@storybook/react";

import { Flex, Separator, Text } from "@optiaxiom/react";

export default {
  component: Separator,
} as Meta<typeof Separator>;

type Story = StoryObj<typeof Separator>;

export const Basic: Story = {
  args: {
    my: "sm",
    orientation: "horizontal",
  },

  render: (args) => {
    return (
      <Flex flexDirection="column" gap="0">
        <Text>First Item</Text>
        <Separator {...args} />
        <Text>Second Item</Text>
      </Flex>
    );
  },
};

export const Vertical: Story = {
  args: {
    mx: "sm",
    orientation: "vertical",
  },

  render: (args) => {
    return (
      <Flex flexDirection="row" gap="0">
        <Text>First Item</Text>
        <Separator {...args} />
        <Text>Second Item</Text>
      </Flex>
    );
  },
};
