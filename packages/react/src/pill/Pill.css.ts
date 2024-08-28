import { theme } from "../styles";
import { type RecipeVariants, recipe, style } from "../vanilla-extract";

export const pill = recipe({
  base: [
    {
      alignItems: "center",
      display: "inline-flex",
      flexDirection: "row",
      gap: "xs",
      justifyContent: "center",
      rounded: "full",
    },
    style({
      backgroundColor: theme.colors["gray.300"],
      color: theme.colors["fg.default"],
      position: "relative",
      userSelect: "none",

      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${theme.colors["gray.300"]}`,
          outlineOffset: "1px",
        },
        "&:hover:not([data-disabled])": {
          backgroundColor: theme.colors["gray.600"],
          color: theme.colors["white"],
        },
        "&[data-disabled]": {
          backgroundColor: theme.colors["bg.disabled"],
          border: `1px solid ${theme.colors["border.disabled"]}`,
          color: theme.colors["fg.disabled"],
        },
        '&[data-state="on"]': {
          backgroundColor: theme.colors["gray.600"],
          color: theme.colors["white"],
        },
      },
    }),
  ],
  variants: {
    size: {
      sm: {
        fontSize: "sm",
        px: "sm",
        py: "2",
      },
      md: {
        fontSize: "md",
        px: "sm",
        py: "4",
      },
      lg: {
        fontSize: "lg",
        px: "md",
        py: "6",
      },
    },
  },
});

export type PillVariants = NonNullable<RecipeVariants<typeof pill>>;
