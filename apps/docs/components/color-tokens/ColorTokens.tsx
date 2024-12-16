import type { theme } from "@optiaxiom/globals";
import type { Props } from "react-docgen-typescript";

import { Box, Flex, Text } from "@optiaxiom/react";

import { Table, Td, Th, Thead, Tr } from "../table";
import { ColorTokenItem } from "./ColorTokenItem";

export function ColorTokens({
  dark,
  light,
  namespace,
}: {
  dark: Props;
  light: Props;
  namespace: string;
}) {
  const palette = Object.fromEntries(
    Object.values(light)
      .filter((token) =>
        ["bg", "border", "fg"].every(
          (prefix) => !token.name.startsWith(`${prefix}.`),
        ),
      )
      .map((token) => [token.type.name, token]),
  );

  return (
    <Table>
      <Thead>
        <Box asChild display={["flex", "table-row"]}>
          <tr>
            <Th flex="1">Token and description</Th>
            <Th display={["none", "table-cell"]}>Value</Th>
          </tr>
        </Box>
      </Thead>
      <tbody>
        {Object.values(light)
          .filter((token) => token.name.startsWith(`${namespace}.`))
          .map((token) => (
            <Tr display={["flex", "table-row"]} key={token.name}>
              <Td flex="1" py="16" w="auto">
                <Flex alignItems="start">
                  <Box
                    fontFamily="mono"
                    style={{ color: "var(--shiki-token-function)" }}
                  >
                    {token.name}
                  </Box>
                  {token.description && <Text>{token.description}</Text>}
                </Flex>
              </Td>
              <Td py="16" w={["auto", "2xl"]}>
                <ColorTokenItem
                  item={{
                    bg: token.name as keyof typeof theme.colors,
                    name: `ld(${palette[token.type.name].name}, ${palette[dark[token.name].type.name].name})`,
                    value: `ld(${JSON.parse(
                      palette[token.type.name].type.name,
                    )}, ${JSON.parse(
                      palette[dark[token.name].type.name].type.name,
                    )})`,
                  }}
                />
              </Td>
            </Tr>
          ))}
      </tbody>
    </Table>
  );
}
