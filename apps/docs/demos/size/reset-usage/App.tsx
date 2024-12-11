import { Box, Flex } from "@optiaxiom/react";

import { Canvas } from "../Canvas";

export function App() {
  return (
    <Canvas p="8">
      <Flex>
        <Box size="auto">size=auto</Box>
      </Flex>
    </Canvas>
  );
}
