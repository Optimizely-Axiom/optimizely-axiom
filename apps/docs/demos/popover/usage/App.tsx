import {
  Heading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@optiaxiom/react";

export function App() {
  return (
    <Popover>
      <PopoverTrigger>Open popover</PopoverTrigger>
      <PopoverContent>
        <Heading fontSize="md">Popover content</Heading>
        <Text>This is the popover content</Text>
      </PopoverContent>
    </Popover>
  );
}
