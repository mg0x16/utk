import React, { useState, useEffect } from "react";

import { makeStyles, makeComponent } from "./styles";

import { system } from "./systems/core";

const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    border: "2px solid red",
    height: 400,
    width: ["90%", "80%", 800],
    backgroundColor: ["red", "green", "blue", "yellow"],
    display: "flex",
    alignItems: ["center", "center", "flex-start"],
    justifyContent: ["center", "center", "flex-start"],
  },
});

const App = () => {
  const [color, setColor] = useState("yellow");
  const classes = useStyles({ w: 300 });

  useEffect(() => {
    setTimeout(() => {
      setColor("green");
    }, 2000);
  }, []);

  return (
    <div className={classes.root}>
      <p>UTK</p>
    </div>
  );
};

export default App;
