import React, { forwardRef } from "react";

import { Button, Text, Drawer } from "../../../src/components";

const SideMenu = forwardRef((props, ref) => {
  return (
    <Drawer ref={ref} width={400}>
      <Text>This is some text</Text>
      <Button
        title="Close"
        onClick={() => {
          ref.current.close();
        }}
      />
    </Drawer>
  );
});

export default SideMenu;
