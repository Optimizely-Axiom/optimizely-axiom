import { Flex, Grid, Heading, Skeleton, Text } from "@optiaxiom/react";

export function App() {
  return (
    <Grid gridTemplateColumns="2" w="full">
      <Demo loading />
      <Demo />
    </Grid>
  );
}

function Demo({ loading }: { loading?: boolean }) {
  return (
    <Flex>
      <Heading>{loading ? <Skeleton /> : "h1"}</Heading>
      <Heading level="3">{loading ? <Skeleton /> : "h3"}</Heading>
      <Text>{loading ? <Skeleton /> : "body"}</Text>
    </Flex>
  );
}
