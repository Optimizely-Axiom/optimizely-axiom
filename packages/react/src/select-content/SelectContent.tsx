import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import { PopoverContent } from "../popover-content";
import { useSelectContext } from "../select-context";
import { Spinner } from "../spinner";
import * as styles from "./SelectContent.css";

type SelectContentProps = BoxProps<
  typeof PopoverContent,
  {
    loading?: boolean;
  }
>;

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ children, loading, ...props }, ref) => {
    const { downshift } = useSelectContext("SelectContent");

    return (
      <PopoverContent
        align="center"
        onOpenAutoFocus={(event: Event) => event.preventDefault()}
        p="4"
        ref={ref}
        side="bottom"
        sideOffset={5}
        {...props}
      >
        <Box asChild {...styles.list()}>
          <ul {...downshift.getMenuProps({}, { suppressRefError: true })}>
            {loading ? (
              <Box asChild display="flex" justifyContent="center" p="md">
                <li>
                  <Spinner />
                </li>
              </Box>
            ) : (
              children
            )}
          </ul>
        </Box>
      </PopoverContent>
    );
  },
);

SelectContent.displayName = "@optiaxiom/react/SelectContent";
