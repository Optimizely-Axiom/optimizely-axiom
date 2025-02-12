"use client";

import {
  Combobox,
  ComboboxCheckboxItem,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxScrollArea,
  ComboboxTrigger,
  ComboboxValue,
} from "@optiaxiom/react/unstable";
import { useState } from "react";

import { colors } from "./data";
import { useSet } from "./useSet";

export function App() {
  const [items, setItems] = useState(colors);
  const [value, { toggle }] = useSet([colors[1]]);

  return (
    <Combobox
      items={items}
      itemToString={(item) => item?.label || ""}
      onInputValueChange={(inputValue) => {
        setItems(
          inputValue
            ? colors.filter((color) =>
                new RegExp(inputValue, "i").test(color.label),
              )
            : colors,
        );
      }}
      onItemSelect={(value) => toggle(value)}
      value={value}
    >
      <ComboboxTrigger w="224">
        <ComboboxValue placeholder="Search a color..." />
      </ComboboxTrigger>

      <ComboboxContent>
        <ComboboxInput />

        <ComboboxScrollArea>
          {items.map((item) => (
            <ComboboxCheckboxItem item={item} key={item.label}>
              {item.label}
            </ComboboxCheckboxItem>
          ))}

          {items.length === 0 && <ComboboxEmpty>No result found</ComboboxEmpty>}
        </ComboboxScrollArea>
      </ComboboxContent>
    </Combobox>
  );
}
