import React, { useState, useEffect } from "react";

import { makeStyles, makeComponent } from "./styles";

const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    border: "2px solid red",
    height: [200, 400, 600],
    backgroundColor: ({ bg }) => bg,
    display: "flex",
    width: ({ w }) => w,
  },
});

const App = () => {
  const [color, setColor] = useState("yellow");
  const classes = useStyles({ bg: ["orange", "red", "green", "blue"], w: 500 });

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
