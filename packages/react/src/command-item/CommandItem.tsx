import { forwardRef } from "react";

import { Box } from "../box";
import { useCommandContext } from "../command-context";
import { CommandItemContextProvider } from "../command-item-context";
import {
  ListboxItemBase,
  type ListboxItemBaseProps,
} from "../listbox-item-base";
import { extractSprinkles } from "../sprinkles";

type CommandItemProps = ListboxItemBaseProps<
  "div",
  {
    active?: boolean;
    item: unknown;
  }
>;

export const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  (
    {
      active,
      addonAfter,
      addonBefore,
      children,
      description,
      icon,
      item,
      ...props
    },
    ref,
  ) => {
    const { restProps, sprinkleProps } = extractSprinkles(props);

    const { downshift, highlightedItem, value } =
      useCommandContext("CommandItem");
    const itemProps = downshift.getItemProps({ item });

    return (
      <CommandItemContextProvider
        active={active ?? value?.has(item)}
        item={item}
      >
        <ListboxItemBase
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          description={description}
          icon={icon}
          {...sprinkleProps}
        >
          <Box
            data-disabled={itemProps["aria-disabled"] ? "" : undefined}
            data-highlighted={highlightedItem === item ? "" : undefined}
            ref={ref}
            {...restProps}
            {...itemProps}
          >
            {children}
          </Box>
        </ListboxItemBase>
      </CommandItemContextProvider>
    );
  },
);

CommandItem.displayName = "@optiaxiom/react/CommandItem";
