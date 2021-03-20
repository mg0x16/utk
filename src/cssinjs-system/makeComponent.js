import React, { forwardRef } from "react";

import makeStyles from "./makeStyles";

import color from "./config/color";
import layout from "./config/layout";
import space from "./config/space";
import border from "./config/border";
import flexbox from "./config/flexbox";
import position from "./config/position";
import background from "./config/background";
import shadow from "./config/shadow";
import image from "./config/image";
import typography from "./config/typography";

const allSystems = {
  color,
  layout,
  space,
  border,
  flexbox,
  position,
  background,
  shadow,
  image,
  typography,
};

const h = React.createElement;

// dynamic variables style props must passed to be used
const makeComponent = C => (
  stylesOrSystems = [],
  // presetPaths = [],
  // variants,
) => {
  // default _hover is chcked
  let styleProps = ["_hover"];

  // identify style-systems definition from normal style rule definition
  const rules = stylesOrSystems.reduce((acc, k, index) => {
    // style system from predefined systems
    if (typeof k === "string") {
      const targetSystem = allSystems[k];
      styleProps = [...styleProps, ...targetSystem.props];
      return { ...acc, [index]: targetSystem.system };
    }

    // style system is provided
    if (k.props && k.system) {
      styleProps = [...styleProps, ...k.props];
      return { ...acc, [index]: k.system };
    }

    // normal raw style object is provided
    return { ...acc, [index]: k };
  }, {});

  const useStyles = makeStyles(rules, true);

  const Comp = forwardRef((props, ref) => {
    // copy all props
    const nextProps = { ref };
    const nextStyleProps = {};

    // seperate style props from other props
    Object.keys(props).forEach(key => {
      if (styleProps.includes(key)) {
        nextStyleProps[key] = props[key];
      } else {
        nextProps[key] = props[key];
      }
    });

    // create style classes
    const classes = useStyles(nextStyleProps);

    // add generated className to props
    const className = `${classes || ""} ${props.className || ""}`.trim();
    if (className.length) {
      nextProps.className = className;
    }

    return h(C, nextProps);
  });

  return Comp;
};

export default makeComponent;
