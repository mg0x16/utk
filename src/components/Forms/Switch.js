import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeComponent, makeStyles } from "../../cssinjs-system";

const Comp = makeComponent("button")([
  {
    padding: 0,
    outline: "none",
    border: "1px solid #ddd",
    backgroundColor: "#eee",
    cursor: "pointer",
  },
]);

const useStyles = makeStyles({
  ball: {
    transition: "all 0.2s ease",
    transform: ({ on }) => `translateX(${on ? "80%" : "0"})`,
    width: ({ size }) => size - 1,
    height: ({ size }) => size - 1,
    backgroundColor: ({ on }) => (on ? "#4299e1" : "#aaa"),
    border: ({ on }) => `1px solid ${on ? "#4299e1" : "#aaa"}`,
    borderRadius: "50%",
  },
});

const Switch = ({ onClick, size = 25, ...rest }) => {
  const [on, setOn] = useState(false);
  const classes = useStyles({ on, size });

  return (
    <Comp
      w={size * 1.8}
      r={size / 2}
      onClick={e => {
        setOn(!on);
        if (onClick) onClick(e, on);
      }}
      {...rest}
    >
      <div className={classes.ball} />
    </Comp>
  );
};

Switch.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
};

export default Switch;
