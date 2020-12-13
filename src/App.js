import React from "react";

import { makeStyles } from "./styles";

const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    border: "2px solid red",
    padding: "5px",
    backgroundColor: "yellow",
    width: "80%",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  text: {
    textAlign: "center",
    color: "blue",
    fontSize: "28px",
    fontWeight: "bold",
  },
});

const App = () => {
  const classes1 = useStyles();

  return (
    <div className={classes1.root}>
      <p className={classes1.text}>UTK</p>
    </div>
  );
};

export default App;
