import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { makeComponent } from "../styles";

import color from "../systems/color";
import layout from "../systems/layout";
import space from "../systems/space";
import border from "../systems/border";
import flexbox from "../systems/flexbox";
import position from "../systems/position";
import shadow from "../systems/shadow";
import typography from "../systems/typography";

const Comp = makeComponent("button")([
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  },
  color,
  layout,
  space,
  border,
  flexbox,
  position,
  shadow,
  typography,
]);

const Button = ({ text, icon, onClick, disabled, ...rest }) => {
  const handleOnClick = useCallback(
    e => {
      if (disabled) return;

      onClick(e);
    },
    [disabled, onClick],
  );

  return (
    <Comp onClick={handleOnClick} disabled={disabled} {...rest}>
      {icon}
      {text}
    </Comp>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
