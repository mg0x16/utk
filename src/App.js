import React, { useState, useEffect } from "react";

import { makeStyles } from "./styles";

const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    border: "2px solid red",
    padding: "5px",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    ":hover": {
      backgroundColor: "green",
    },
    "@media (min-width: 40em)": {
      ":hover": {
        backgroundColor: ({ color }) => color,
      },
      width: "50%",
    },
  },
});

const App = () => {
  const [c, setC] = useState("yellow");

  const classes = useStyles({ color: c });

  useEffect(() => {
    setTimeout(() => {
      setC("orange");
    }, 2000);
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <p>UTK</p>
      </div>
    </div>
  );
};

export default App;
