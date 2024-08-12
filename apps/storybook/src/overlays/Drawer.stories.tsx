import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
  Flex,
} from "@optiaxiom/react";
import { type ComponentPropsWithoutRef, useState } from "react";

const withTemplate = ({
  content = "This is the Drawer content.",
  defaultOpen = false,
  description = "",
  withFooter = true,
} = {}) =>
  function Template(props: Partial<ComponentPropsWithoutRef<typeof Drawer>>) {
    const [open, setOpen] = useState(defaultOpen);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
      <Flex>
        <Button onClick={onOpen}>Open Drawer</Button>

        <Drawer onClose={onClose} open={open} {...props}>
          <DrawerTitle description={description}>Drawer</DrawerTitle>
          <DrawerBody>{content}</DrawerBody>
          {withFooter && (
            <DrawerFooter>
              <Button appearance="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={onClose}>
                Confirm
              </Button>
            </DrawerFooter>
          )}
        </Drawer>
      </Flex>
    );
  };

export default {
  argTypes: {
    position: {
      control: "radio",
      options: ["right", "left", "bottom"],
    },
  },
  component: Drawer,
  render: withTemplate(),
} as Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  args: {},
};

export const WithCloseButton: Story = {
  args: {
    withCloseButton: true,
  },
};

export const PositionLeft: Story = {
  args: {
    position: "left",
  },
};

export const WithDescription: Story = {
  render: withTemplate({
    description: "This is a description for the drawer.",
  }),
};

export const LongContent: Story = {
  args: {},
  render: withTemplate({
    content: `
      This is a drawer with long content.
      It demonstrates how the drawer handles scrolling with a lot of text.
      ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(50)}
    `,
  }),
};

export const InitiallyOpen: Story = {
  render: withTemplate({ defaultOpen: true }),
};

export const WithoutFooter: Story = {
  render: withTemplate({ withFooter: false }),
};
