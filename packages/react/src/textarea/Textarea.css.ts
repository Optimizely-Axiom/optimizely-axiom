import { theme } from "../styles";
import { recipe, style } from "../vanilla-extract";

export const wrapper = recipe({
  base: [
    {
      border: "1",
      fontSize: "md",
      gap: "xs",
      overflow: "auto",
      p: "xs",
      rounded: "sm",
    },
    style({
      letterSpacing: "-0.14px",
      selectors: {
        "&:focus-within": {
          outline: `2px solid ${theme.colors["brand.200"]}`,
          outlineOffset: "1px",
        },
        '&:focus-within:is([data-invalid="true"])': {
          outline: `2px solid ${theme.colors["red.200"]}`,
          outlineOffset: "1px",
        },
        '&:focus-within:not([data-invalid="true"])': {
          outline: `2px solid  ${theme.colors["brand.200"]}`,
          outlineOffset: "1px",
        },
        "&:hover": {
          borderColor: theme.colors["border.brand"],
        },
        '&[data-disabled="true"]': {
          backgroundColor: theme.colors["bg.disabled"],
          borderColor: theme.colors["border.secondary"],
          pointerEvents: "none",
        },
        '&[data-invalid="true"]': {
          borderColor: theme.colors["border.error"],
        },
      },
    }),
  ],
});
export const textarea = recipe({
  base: [
    {
      alignItems: "start",
      flex: "1",
      w: "full",
    },
    style({
      borderColor: theme.colors["border.default"],
      color: theme.colors["fg.default"],
      lineHeight: "24px",
      minHeight: "108px",
      resize: "none",
      selectors: {
        "&:focus-visible": {
          outlineWidth: "0px",
        },
        '[data-disabled="true"] &': {
          backgroundColor: theme.colors["neutral.50"],
          color: theme.colors["fg.disabled"],
        },
      },
    }),
  ],
});
