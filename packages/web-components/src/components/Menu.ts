import { Menu as MenuComponent } from "@optiaxiom/react";

import type { ComponentAttributes } from "./ComponentAttributes";

import { register } from "../register";

export const Menu = "ax-menu";
export default register(Menu, MenuComponent);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      [Menu]: ComponentAttributes<typeof MenuComponent>;
    }
  }
}
