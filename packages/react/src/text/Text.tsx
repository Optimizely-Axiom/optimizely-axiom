import { Slot } from "@radix-ui/react-slot";
import { type ElementType, forwardRef } from "react";

import type { ExtendProps } from "../utils";

import { Box, type BoxProps } from "../box";
import * as styles from "./Text.css";

export type TextProps<T extends ElementType = "p", P = unknown> = BoxProps<
  T,
  ExtendProps<
    {
      as?: "p" | "span";
    } & styles.TextVariants,
    P
  >
>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { as = "p", asChild, children, className, lineClamp, truncate, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : as;

    return (
      <Box
        asChild
        ref={ref}
        {...styles.text({ lineClamp, truncate }, className)}
        {...props}
      >
        <Comp>{children}</Comp>
      </Box>
    );
  },
);

Text.displayName = "@optiaxiom/react/Text";
