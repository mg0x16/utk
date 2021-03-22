import React, { forwardRef } from "react";
import _ from "lodash";

import makeStyles from "./makeStyles";

import color from "./config/color";
import layout from "./config/layout";
import space from "./config/space";
import border from "./config/border";
import flexbox from "./config/flexbox";
import position from "./config/position";
import shadow from "./config/shadow";
import image from "./config/image";
import typography from "./config/typography";
import bgImage from "./config/bgImage";
import bgGradient from "./config/bgGradient";
import cursor from "./config/cursor";

import { system } from "./config/core";

import { useTheme } from "../theme";

const allSystems = {
  color,
  layout,
  space,
  border,
  flexbox,
  position,
  shadow,
  image,
  typography,
  bgImage,
  bgGradient,
  cursor,
};

const defaultSystems = {
  color,
  layout,
  space,
  border,
  position,
  shadow,
  cursor,
};

const h = React.createElement;

// dynamic variables style props must passed to be used
const makeComponent = C => (
  stylesOrSystems = [],
  { supportedPseudoClasses = ["_hover"], nameID = "" } = {},
) => {
  // default _hover is chcked
  let styleProps = [...supportedPseudoClasses];

  // identify style-systems definition from normal style rule definition
  let collectedSystemsConfigs = {};

  // append default Systems
  let sos = Object.keys(defaultSystems);
  sos = sos.concat(stylesOrSystems);

  const rules = sos.reduce((acc, k, index) => {
    // style system from predefined systems
    if (typeof k === "string") {
      const targetSystem = allSystems[k];
      if (targetSystem) {
        collectedSystemsConfigs = {
          ...collectedSystemsConfigs,
          [k]: targetSystem.config,
        };

        styleProps = [...styleProps, ...targetSystem.props];
        return { ...acc, [index]: targetSystem.system };
      }

      return acc;
    }

    // style system is provided
    if (k.props && k.system) {
      styleProps = [...styleProps, ...k.props];
      return { ...acc, [index]: k.system };
    }

    // normal raw style object is provided
    return { ...acc, [index]: k };
  }, {});

  // append pseudo classes rules with systems that has nested props picker
  supportedPseudoClasses.forEach(pc => {
    rules[pc] = {
      [pc.replace("_", ":")]: Object.keys(collectedSystemsConfigs).reduce(
        (acc, k) => ({
          ...acc,
          ...system(collectedSystemsConfigs[k], pc),
        }),
        {},
      ),
    };
  });

  const useStyles = makeStyles(rules, true);

  const Comp = forwardRef((props, ref) => {
    const { theme } = useTheme();

    // copy all props
    const nextProps = { ref };

    // add additional theme props
    const nextStyleProps = { ..._.get(theme, `components.${nameID}`, {}) };

    // seperate style props from other props
    Object.keys(props).forEach(key => {
      if (styleProps.includes(key)) {
        nextStyleProps[key] = props[key];
      } else {
        nextProps[key] = props[key];
      }
    });

    // create style classes
    const classes = useStyles(nextStyleProps, { palette: theme.palette });

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
