import {
  createVar,
  recipe,
  type RecipeVariants,
  style,
} from "../vanilla-extract";

export const contentAvailableHeightVar = createVar();
export const triggerWidth = createVar();

export const content = recipe({
  base: [
    {
      bg: "bg.default",
      border: "1",
      borderColor: "border.secondary",
      display: "flex",
      flexDirection: "column",
      gap: "2",
      maxW: "xs",
      overflow: "auto",
      p: "4",
      rounded: "lg",
      shadow: "md",
      z: "popover",
    },
    style({
      maxHeight: contentAvailableHeightVar,
    }),
  ],

  variants: {
    minW: {
      "0": {},
      trigger: style({
        minWidth: triggerWidth,
      }),
    },
    provider: {
      "dropdown-menu": style({
        vars: {
          [contentAvailableHeightVar]:
            "var(--radix-dropdown-menu-content-available-height)",
          [triggerWidth]: "var(--radix-dropdown-menu-trigger-width)",
        },
      }),
    },
  },
});

export type ContentVariants = RecipeVariants<typeof content>;
