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
  small: {
    property: "width:300px",
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
  ["bg", "backgroundColor", "small"],
);

const App = () => {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    setTimeout(() => {
      setColor("green");
    }, 2000);
  }, []);

  return (
    <Box small bg={color}>
      <p>UTK</p>
    </Box>
  );
};

export default App;
