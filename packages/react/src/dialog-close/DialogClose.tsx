import * as RadixDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "../button";

type DialogCloseProps = ButtonProps<typeof RadixDialog.Close>;

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ asChild, children, ...props }, ref) => {
    return (
      <RadixDialog.Close asChild ref={ref} {...props}>
        {asChild ? children : <Button>{children}</Button>}
      </RadixDialog.Close>
    );
  },
);

DialogClose.displayName = "@optiaxiom/react/DialogClose";
