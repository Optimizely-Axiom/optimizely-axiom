import { cloneElement, forwardRef, isValidElement } from "react";

import { Button, type ButtonProps } from "../button";
import { Flex } from "../flex";
import { useGlobalNavContext } from "../global-nav-context";
import { Tooltip } from "../tooltip";

export type GlobalNavItemProps = ButtonProps<
  typeof Button,
  {
    active?: boolean;
  }
>;

export const GlobalNavItem = forwardRef<HTMLButtonElement, GlobalNavItemProps>(
  ({ active, addonAfter, asChild, children, ...props }, ref) => {
    const { expanded } = useGlobalNavContext("GlobalNavItem");
    let tooltip = children;
    if (asChild) {
      const newElement = isValidElement(children) ? children : null;
      tooltip = newElement ? newElement.props.children : tooltip;
      children = newElement
        ? cloneElement(
            newElement,
            undefined,
            expanded && (
              <Flex flex="1" textAlign="start">
                {newElement.props.children}
              </Flex>
            ),
          )
        : children;
    } else {
      children = expanded && (
        <Flex flex="1" textAlign="start">
          {children}
        </Flex>
      );
    }

    return (
      <Flex asChild>
        <li>
          <Tooltip
            content={!expanded && (props["aria-label"] || tooltip)}
            side="right"
          >
            <Button
              addonAfter={expanded && addonAfter}
              appearance="secondary"
              asChild={asChild}
              data-state={active ? "active" : undefined}
              ref={ref}
              size="lg"
              {...props}
            >
              {children}
            </Button>
          </Tooltip>
        </li>
      </Flex>
    );
  },
);

GlobalNavItem.displayName = "@optiaxiom/react/GlobalNavItem";
