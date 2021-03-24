import React, { useState, useRef } from "react";

import { Text, Link, Button, Input, Flex } from "../../src/components";

import { ThemeProvider } from "../../src/theme";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const App = () => {
  const menuRef = useRef(null);

  return (
    <ThemeProvider>
      <Flex flex="1">
        <Header
          onMenuClick={() => {
            menuRef.current.open();
          }}
        />
        <SideMenu ref={menuRef} />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
