import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { forwardRef } from "react";

import type { ExcludeProps } from "../utils";

import { Box, type BoxProps } from "../box";
import { useDisclosureContext } from "../disclosure-context";
import * as styles from "./DisclosureContent.css";

type DisclosureContentProps = ExcludeProps<
  BoxProps<typeof RadixCollapsible.Content>,
  "forceMount"
>;

export const DisclosureContent = forwardRef<
  HTMLDivElement,
  DisclosureContentProps
>(({ children, className, ...props }, ref) => {
  useDisclosureContext("DisclosureContent");

  return (
    <Box asChild ref={ref} {...styles.content({}, className)}>
      <RadixCollapsible.Content>
        <Box color="fg.default" fontSize="md" p="8" pt="0" {...props}>
          {children}
        </Box>
      </RadixCollapsible.Content>
    </Box>
  );
});

DisclosureContent.displayName = "@optiaxiom/react/DisclosureContent";
