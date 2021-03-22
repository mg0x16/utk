import React from "react";

import { Text, Header, Link, Button, Input, Flex } from "../../src/components";

import { ThemeProvider } from "../../src/theme";

const App = () => {
  return (
    <ThemeProvider>
      <Flex flex="1" center>
        <Flex w={[0.9, 450]} boxShadow="5x" r={10} overflow="hidden" h={600}>
          <Header fs="2x" bg="primary" c="white" py="10" px="2" center>
            Sign In
          </Header>
          <Flex py="12" px={["6", "12"]} flex="1">
            <Input placeholder="Username" mb="5" />
            <Input placeholder="Password" mb="5" />

            <Text right mb="7">
              Forget <Link href="#">Username / Password?</Link>
            </Text>
            <Button>SIGN IN</Button>
            <Flex flex="1" centerC end>
              <Text c="gray.600" mb="2">
                Don't have an account?
              </Text>
              <Link href="#">SIGN UP NOW</Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
