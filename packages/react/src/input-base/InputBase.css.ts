import { theme } from "../styles";
import { type RecipeVariants, recipe, style } from "../vanilla-extract";

export const wrapper = recipe({
  base: [
    {
      alignItems: "center",
      border: "1",
      color: "fg.default",
      display: "flex",
      flexDirection: "row",
      rounded: "sm",
    },
    style({
      borderColor: theme.colors["border.default"],

      selectors: {
        '&:focus-within:is([data-invalid="true"])': {
          outlineColor: theme.colors["red.200"],
          outlineOffset: "1px",
          outlineStyle: "solid",
          outlineWidth: "2px",
        },
        '&:focus-within:not([data-invalid="true"])': {
          outlineColor: theme.colors["brand.200"],
          outlineOffset: "1px",
          outlineStyle: "solid",
          outlineWidth: "2px",
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

  variants: {
    size: {
      sm: {
        fontSize: "sm",
        h: "24",
        p: "8",
      },
      md: {
        fontSize: "md",
        h: "32",
        p: "8",
      },

      lg: {
        fontSize: "lg",
        h: "40",
        px: "8",
        py: "4",
      },
    },
  },
});

export const input = recipe({
  base: [
    {
      bg: "transparent",
      w: "full",
    },
    style({
      selectors: {
        "&:focus-visible": {
          outlineWidth: "0px",
        },
      },
    }),
  ],
});

export type WrapperVariants = RecipeVariants<typeof wrapper>;
