import React, { useState, useEffect } from "react";

import { makeStyles, makeComponent } from "./styles";

import { system } from "./systems/core";

const exp = {
  bg: {
    property: "backgroundColor",
  },
  backgroundColor: {
    property: "backgroundColor",
  },
};

const Box = makeComponent("div")(
  {
    margin: "100px auto",
    border: "2px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...system(exp),
  },
  ["bg", "backgroundColor"],
);

const App = () => {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    setTimeout(() => {
      setColor("green");
    }, 2000);
  }, []);

  return (
    <Box bg={color}>
      <p>UTK</p>
    </Box>
  );
};

export default App;
