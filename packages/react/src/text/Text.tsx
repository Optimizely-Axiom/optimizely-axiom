import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import "inter-ui/inter-variable.css";
import { type ComponentPropsWithRef, forwardRef } from "react";

import { Box } from "../box";
import { extractSprinkles } from "../utils";
import * as styles from "./Text.css";

type TextProps = Omit<
  ComponentPropsWithRef<"p"> & ComponentPropsWithRef<typeof Box>,
  keyof styles.Sprinkles
> &
  styles.Sprinkles;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, children, className, size = "md", ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Box
        asChild
        ref={ref}
        {...extractSprinkles(styles.sprinkles, {
          className: clsx(className, styles.base),
          size,
          ...props,
        })}
      >
        <Comp>{children}</Comp>
      </Box>
    );
  },
);

Text.displayName = "@optiaxiom/react/Text";
