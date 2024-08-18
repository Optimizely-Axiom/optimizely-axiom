import { createContext } from "react";

export type ComboboxContextType = {
  mode?: "multiple" | "single";
  onSelect?: (value: string) => void;
  open?: boolean;
  setOpen: (open: boolean) => void;
  setValue: (value: string) => void;
  value: string;
};

export const ComboboxContext = createContext<ComboboxContextType | undefined>(
  undefined,
);
