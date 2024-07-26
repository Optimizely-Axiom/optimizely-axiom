import { type ReactNode, forwardRef } from "react";

import { Badge } from "../badge";
import { Box, type BoxProps } from "../box";
import { Flex } from "../flex";
import * as styles from "./Indicator.css";

type IndicatorProps = BoxProps<
  typeof Badge,
  {
    content: ReactNode;
    disabled?: boolean;
    offset?: boolean;
    ping?: boolean;
    position?: "bottom-right" | "top-right";
  }
>;

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      asChild,
      children,
      className,
      colorScheme,
      content,
      disabled,
      offset = true,
      ping,
      position = "top-right",
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <Flex ref={ref} {...styles.indicator({}, className)} {...props}>
        {!disabled && (
          <Box {...styles.floating({ offset, position })}>
            {ping && (
              <Badge
                aria-hidden="true"
                asChild={asChild}
                colorScheme={colorScheme}
                variant={variant}
                {...styles.badge({ ping: true })}
              >
                {content}
              </Badge>
            )}

            <Badge
              asChild={asChild}
              colorScheme={colorScheme}
              variant={variant}
              {...styles.badge()}
            >
              {content}
            </Badge>
          </Box>
        )}

        {children}
      </Flex>
    );
  },
);

Indicator.displayName = "@optiaxiom/react/Indicator";
