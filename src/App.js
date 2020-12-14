import React, { useState, useEffect } from "react";

import { makeStyles, makeComponent } from "./styles";

const useStyles = makeStyles({
  root: {
    padding: 40,
  },
});

const Box = makeComponent("div")(
  {
    margin: "100px auto",
    border: "2px solid red",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ({ color }) => color,
  },
  ["color", "w"],
);

const App = () => {
  const [color, setColor] = useState("yellow");
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setColor("green");
    }, 2000);
  }, []);

  return (
    <Box color={color} className={classes.root}>
      <p>UTK</p>
    </Box>
  );
};

export default App;
