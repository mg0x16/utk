import React from "react";

import { makeStyles } from "./styles";

const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    border: "2px solid red",
    padding: "5px",
    backgroundColor: "yellow",
    width: "50%",
    ":hover": {
      backgroundColor: "green",
    },
    "@media (min-width: 40em)": {
      width: "100%",
      ":hover": {
        backgroundColor: "orange",
      },
    },
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: "28px",
    fontWeight: "bold",
  },
});

const App = () => {
  const classes1 = useStyles();

  return (
    <div>
      <div className={classes1.root}>
        <p className={classes1.text}>UTK</p>
      </div>
    </div>
  );
};

export default App;
