import { theme } from "@optiaxiom/globals";

import { recipe, style } from "../vanilla-extract";

export const button = recipe({
  base: [
    {
      border: "1",
      gap: "12",
      justifyContent: "space-between",
      px: "8",
      py: "10",
      size: "lg",
    },
    style({
      backgroundColor: theme.colors["bg.default"],
      borderColor: theme.colors["border.default"],

      "@media": {
        "(hover: hover)": {
          selectors: {
            '&:hover:not(:active, [data-disabled], [data-loading], [data-state="active"], [data-state="on"])':
              {
                backgroundColor: theme.colors["bg.page"],
                borderColor: theme.colors["border.control"],
              },
          },
        },
      },

      selectors: {
        '&:active:not([data-disabled], [data-loading], [data-state="active"], [data-state="on"])':
          {
            backgroundColor: theme.colors["bg.default.pressed"],
            borderColor: theme.colors["border.control.hovered"],
          },
        "&[data-disabled]:not([data-loading])": {
          backgroundColor: theme.colors["bg.page"],
          borderColor: theme.colors["border.disabled"],
        },
      },
    }),
  ],
});
