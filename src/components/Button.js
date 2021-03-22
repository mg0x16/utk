import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { makeComponent } from "../cssinjs-system";

import Icon from "./Typography/Icon";

const Comp = makeComponent("button")(
  [
    {
      boxSizing: "border-box",
      userSelect: "none",
      outline: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "flexbox",
    "typography",
  ],
  {
    nameID: "button",
  },
);

const Button = ({ children, title, icon, onClick, disabled, ...rest }) => {
  const handleOnClick = useCallback(
    e => {
      if (disabled) return;

      onClick(e);
    },
    [disabled, onClick],
  );

  return (
    <Comp onClick={handleOnClick} disabled={disabled} {...rest}>
      {children || (
        <>
          {icon && title ? (
            <Icon icon={icon} pr="btnGap" />
          ) : icon ? (
            <Icon icon={icon} />
          ) : null}
          {title}
        </>
      )}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.func,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
