import type { Meta, StoryObj } from "@storybook/react";

import { Field, Flex, Text } from "@optiaxiom/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@optiaxiom/react/unstable";
import { useState } from "react";

type Story<T = string> = StoryObj<typeof Select<T>>;

const languages = [
  "Afrikaans",
  "Arabic",
  "Bangla",
  "Bulgarian",
  "Catalan",
  "Chinese (Simplified)",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Finnish",
  "French",
  "German",
  "Greek",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Lithuanian",
  "Malay",
  "Norwegian",
  "Persian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Spanish",
  "Swahili",
  "Swedish",
  "Tagalog",
  "Tamil",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Urdu",
  "Vietnamese",
];

export default {
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>

        <SelectContent>
          {languages.map((item, index) => {
            return (
              <SelectItem
                addonAfter={<SelectItemIndicator />}
                item={item}
                key={index}
              >
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </>
    ),
    defaultOpen: true,
    defaultValue: "Bangla",
    items: languages,
  },
  component: Select,
} as Meta<typeof Select>;

export const Basic: Story = {};

export const WithLabel: Story = {
  decorators: (Story) => (
    <Field label="Label">
      <Story />
    </Field>
  ),
};

export const Disabled: Story = {
  args: {
    defaultOpen: false,
    disabled: true,
  },
};

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];
const meats = ["Beef", "Chicken", "Lamb", "Pork"];
const combinedFoodList = [...fruits, ...vegetables, ...meats];

export const Grouped: Story = {
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>

        <SelectContent>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((item, index) => {
            return (
              <SelectItem
                addonAfter={<SelectItemIndicator />}
                item={item}
                key={index}
              >
                {item}
              </SelectItem>
            );
          })}
          <SelectSeparator />

          <SelectLabel>Vegetables</SelectLabel>
          {vegetables.map((item, index) => {
            return (
              <SelectItem
                addonAfter={<SelectItemIndicator />}
                item={item}
                key={index}
              >
                {item}
              </SelectItem>
            );
          })}
          <SelectSeparator />

          <SelectLabel>Meats</SelectLabel>
          {meats.map((item, index) => {
            return (
              <SelectItem
                addonAfter={<SelectItemIndicator />}
                item={item}
                key={index}
              >
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </>
    ),
    defaultValue: null,
    items: combinedFoodList,
  },
};

type Book = {
  author: string;
  disabled: boolean;
  id: string;
  title: string;
};

const books: Book[] = [
  {
    author: "Harper Lee",
    disabled: false,
    id: "book-1",
    title: "To Kill a Mockingbird",
  },
  {
    author: "Lev Tolstoy",
    disabled: false,
    id: "book-2",
    title: "War and Peace",
  },
  {
    author: "Fyodor Dostoyevsky",
    disabled: false,
    id: "book-3",
    title: "The Idiot",
  },
  {
    author: "Oscar Wilde",
    disabled: true,
    id: "book-4",
    title: "A Picture of Dorian Gray",
  },
  { author: "George Orwell", disabled: false, id: "book-5", title: "1984" },
  {
    author: "Jane Austen",
    disabled: true,
    id: "book-6",
    title: "Pride and Prejudice",
  },
  {
    author: "Marcus Aurelius",
    disabled: false,
    id: "book-7",
    title: "Meditations",
  },
  {
    author: "Fyodor Dostoevsky",
    disabled: true,
    id: "book-8",
    title: "The Brothers Karamazov",
  },
  {
    author: "Lev Tolstoy",
    disabled: false,
    id: "book-9",
    title: "Anna Karenina",
  },
  {
    author: "Fyodor Dostoevsky",
    disabled: false,
    id: "book-10",
    title: "Crime and Punishment",
  },
];

export const Controlled: Story<Book> = {
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="Select a book" />
        </SelectTrigger>

        <SelectContent>
          {books.map((item, index) => {
            return (
              <SelectItem
                addonAfter={<SelectItemIndicator />}
                item={item}
                key={index}
              >
                {item.title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </>
    ),
    isItemDisabled: (book) => book.disabled,
    items: books,
    itemToKey: (book) => book?.id,
    itemToString: (book) => book?.title ?? "",
  },
  render: function Controlled(args) {
    const [value, setValue] = useState<Book | null>(books[9]);

    return (
      <Flex alignItems="center">
        <Select {...args} onValueChange={setValue} value={value} />

        <Text>Selected Value: {value ? value.title : "None"}</Text>
      </Flex>
    );
  },
};
