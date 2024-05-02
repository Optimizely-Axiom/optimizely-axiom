import { keyframes, style } from "@vanilla-extract/css";

import { layers } from "../styles";

const fadeIn = keyframes({
  "0%": { opacity: 0.1, transform: "scale(0)" },
});
const fadeOut = keyframes({
  "0%": { opacity: 0.3 },
});

export const base = style({
  "@layer": {
    [layers.axiom]: {
      animationDuration: "0.4s",
      animationName: fadeIn,
      animationTimingFunction: "ease-in-out",
      background: "currentColor",
      borderRadius: "50%",
      opacity: 0.3,
      position: "absolute",
      transform: "scale(1)",
    },
  },
});

export const exit = style({
  "@layer": {
    [layers.axiom]: {
      animationName: `${fadeOut}, ${fadeIn}`,
      opacity: 0,
    },
  },
});
