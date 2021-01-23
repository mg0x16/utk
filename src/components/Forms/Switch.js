import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeComponent, makeStyles } from "../../styles";

import color from "../../systems/color";
import layout from "../../systems/layout";
import space from "../../systems/space";
import border from "../../systems/border";
import position from "../../systems/position";
import background from "../../systems/background";
import shadow from "../../systems/shadow";

const Comp = makeComponent("button")(
  [
    color,
    layout,
    space,
    border,
    position,
    background,
    shadow,
    {
      padding: 0,
      outline: "none",
      boxSizing: "content-box",
      borderRadius: "25px",
    },
  ],
  ["form.switch"],
);

const useStyles = makeStyles(theme => ({
  ball: {
    transition: "all 0.2s ease",
    transform: ({ on }) => `translateX(${on ? "80%" : "0"})`,
    width: ({ size }) => size - 1,
    height: ({ size }) => size - 1,
    backgroundColor: ({ on }) => (on ? theme.palette.primary : "white"),
    border: `1px solid ${theme.palette.primary}`,
    borderRadius: "50%",
  },
}));

const Switch = ({ onClick, ...rest }) => {
  const size = 25;
  const [on, setOn] = useState(false);
  const classes = useStyles({ on, size });

  return (
    <Comp
      w={size * 1.8}
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
};

export default Switch;
