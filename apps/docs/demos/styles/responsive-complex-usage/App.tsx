import { Box, Flex, Text } from "@optiaxiom/react";
import Image from "next/image";

import beach from "./beach.jpg";

export function App() {
  return (
    <Box
      bg="surface"
      maxW={["sm", "2xl"]}
      overflow="hidden"
      rounded="sm"
      shadow="sm"
    >
      <Flex flexDirection={["column", "row"]} gap="0">
        <Image
          alt="brown glass bottle beside white book on blue and white textile"
          src={beach}
          style={{ minWidth: "0" }}
        />

        <Box p="md">
          <Text
            color="fg.accent.magenta"
            fontWeight="600"
            textTransform="uppercase"
          >
            Phasellus auctor
          </Text>

          <Text fontSize="lg" fontWeight="700" my="xs">
            Nullam rhoncus gravida urna
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            efficitur feugiat enim, id pretium nisl luctus et.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
