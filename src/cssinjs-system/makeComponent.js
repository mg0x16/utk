import React, { forwardRef } from "react";
import _ from "lodash";

import makeStyles from "./makeStyles";
// import variant from "../systems/variant";

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
  // default variant prop always reserved
  let styleProps = ["variant"];

  // append preset styles
  // presetPaths.reverse().forEach(p => {
  //   if (_.has(preset, p)) {
  //     stylesOrSystems.unshift(_.get(preset, p));
  //   }
  // });

  // append variants if exists
  // if (variants && _.has(preset, `${variants}.variants`)) {
  //   stylesOrSystems.push(variant(_.get(preset, `${variants}.variants`)));
  // }

  // identify style-system definition from normal style rule definition
  const rules = stylesOrSystems.reduce((acc, k, index) => {
    // style system is provided
    if (typeof k === "string") {
      const targetSystem = allSystems[k];
      styleProps = [...styleProps, ...targetSystem.props];
      return { ...acc, [index]: targetSystem.system };
    }

    if (k.props && k.system) {
      styleProps = [...styleProps, ...k.props];
      return { ...acc, [index]: k.system };
    }

    // normal raw style object is provided
    return { ...acc, [index]: k };
  }, {});

  // console.log(rules);

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
    console.log(classes);
    console.log("***************");

    // add generated className to props
    const className = `${classes || ""} ${props.className || ""}`.trim();
    if (className.length) {
      nextProps.className = className;
    }

    return h(C, nextProps);
  });

  // console.log("--------------------");

  return Comp;
};

export default makeComponent;
