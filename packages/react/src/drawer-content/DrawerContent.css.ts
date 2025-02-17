import { recipe, type RecipeVariants, style } from "../vanilla-extract";

export const content = recipe({
  base: [
    {
      color: "fg.default",
      display: "flex",
      flexDirection: "column",
    },
    style({
      position: "fixed",
    }),
  ],
  variants: {
    position: {
      bottom: [
        {
          borderT: "1",
        },
        style({
          bottom: 0,
          left: 0,
          right: 0,
        }),
      ],
      left: [
        {
          borderR: "1",
          h: "full",
          maxW: ["full", "lg"],
          w: ["full", "3/4"],
        },
        style({
          bottom: 0,
          left: 0,
          top: 0,
        }),
      ],
      right: [
        {
          borderL: "1",
          h: "full",
          maxW: ["full", "lg"],
          w: ["full", "3/4"],
        },
        style({
          bottom: 0,
          right: 0,
          top: 0,
        }),
      ],
    },
  },
});

export type DrawerVariants = RecipeVariants<typeof content>;
