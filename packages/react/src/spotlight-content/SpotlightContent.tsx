import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCombobox } from "downshift";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

import { Command } from "../command";
import { CommandListbox } from "../command-listbox";
import { DialogContent } from "../dialog-content";
import { DialogTitle } from "../dialog-title";
import { PopoverContent } from "../popover-content";
import { useSpotlightContext } from "../spotlight-context";

type SpotlightContentProps = ComponentPropsWithoutRef<
  typeof DialogContent | typeof PopoverContent
>;

export const SpotlightContent = forwardRef<
  HTMLDivElement,
  SpotlightContentProps
>(({ "aria-label": ariaLabel, children, size: _size, ...props }, ref) => {
  const {
    inputValue,
    isItemDisabled,
    items,
    itemToKey,
    itemToString,
    itemToSubItems,
    onInputValueChange,
    onItemSelect,
  } = useSpotlightContext("SpotlightContent");

  return (
    <DialogContent
      aria-describedby={undefined}
      gap="0"
      overflow="hidden"
      pb="lg"
      ref={ref}
      transitionType="pop"
      {...props}
    >
      <VisuallyHidden>
        <DialogTitle>{ariaLabel ?? "Quick search"}</DialogTitle>
      </VisuallyHidden>

      <Command
        inputValue={inputValue}
        isItemDisabled={isItemDisabled}
        items={items}
        itemToKey={itemToKey}
        itemToString={itemToString}
        itemToSubItems={itemToSubItems}
        onInputValueChange={onInputValueChange}
        onItemSelect={onItemSelect}
        open
        selectedItem={null}
        stateReducer={(state, actionAndChanges) => {
          const { changes, type } = actionAndChanges;

          switch (type) {
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
              return {
                ...changes,
                /**
                 * Keep the selected option highlighted rather than resetting to -1
                 */
                highlightedIndex: state.highlightedIndex,
              };
            default:
              return changes;
          }
        }}
      >
        <CommandListbox>{children}</CommandListbox>
      </Command>
    </DialogContent>
  );
});

SpotlightContent.displayName = "@optiaxiom/react/SpotlightContent";
