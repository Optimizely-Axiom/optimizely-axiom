import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

import { Box, type BoxProps, extractBoxProps } from "../box";
import { Cover } from "../cover";
import { IconUpRightFromSquare } from "../icons/IconUpRightFromSquare";
import { decorateChildren } from "../utils";
import * as styles from "./Link.css";

type LinkProps = BoxProps<
  "a",
  Pick<ComponentPropsWithoutRef<typeof Cover>, "overlay"> &
    styles.LinkVariants & {
      /**
       * Whether to show disabled state and disable interactions.
       */
      disabled?: boolean;
      /**
       * Show an external link icon and sets the correct rel/target attributes.
       */
      external?: boolean;
    }
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      appearance = "default",
      asChild,
      children,
      className,
      disabled,
      external,
      href,
      overlay,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...styles.link({ appearance }, className)} {...boxProps}>
        <Cover asChild overlay={overlay}>
          <Comp
            aria-disabled={disabled}
            data-disabled={disabled ? "" : undefined}
            data-overlay={overlay ? "" : undefined}
            href={href}
            ref={ref}
            {...(external && { rel: "noopener noreferrer", target: "_blank" })}
            {...restProps}
            {...(disabled && {
              href: undefined,
              role: "link",
            })}
          >
            {decorateChildren({ asChild, children }, (children) => (
              <>
                {children}

                {external && (
                  <Box asChild {...styles.icon()}>
                    <IconUpRightFromSquare />
                  </Box>
                )}
              </>
            ))}
          </Comp>
        </Cover>
      </Box>
    );
  },
);

Link.displayName = "@optiaxiom/react/Link";
