import { Button, Flex, Input } from "@optiaxiom/react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

export function App() {
  const [hidden, setHidden] = useState(true);

  return (
    <Flex flexDirection="row">
      <Input placeholder="Email" startDecorator="@" />
      <Input endDecorator="kg" placeholder="Weight" />
      <Input
        endDecorator={
          <Button
            appearance="secondary"
            icon={hidden ? <IconEye /> : <IconEyeOff />}
            onClick={() => setHidden((flag) => !flag)}
            rounded="full"
            size="sm"
          />
        }
        placeholder="Password"
        type={hidden ? "password" : "text"}
      />
    </Flex>
  );
}
