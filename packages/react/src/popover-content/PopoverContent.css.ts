import { recipe, style } from "../vanilla-extract";

export const content = recipe({
  base: [
    {
      bg: "surface",
      border: "1",
      borderColor: "border.secondary",
      display: "flex",
      flexDirection: "column",
      gap: "2",
      p: "sm",
      rounded: "lg",
      shadow: "md",
      z: "popover",
    },
    style({
      minWidth: "var(--radix-popover-trigger-width)",
      position: "relative",
    }),
  ],
});
