import React, { forwardRef } from "react";
import _ from "lodash";

import makeStyles from "./makeStyles";
import defaultPreset from "../theme/defaultPreset";
import variant from "../systems/variant";

const h = React.createElement;

// dynamic variables style props must passed to be used
const makeComponent = preset => C => (
  stylesOrSystems = [],
  presetPaths = [],
  variants,
) => {
  // default variant prop always reserved
  let styleProps = ["variant"];

  // append preset styles
  presetPaths.reverse().forEach(p => {
    if (_.has(preset, p)) {
      stylesOrSystems.unshift(_.get(preset, p));
    }
  });

  // append variants if exists
  if (variants && _.has(preset, `${variants}.variants`)) {
    stylesOrSystems.push(variant(_.get(preset, `${variants}.variants`)));
  }

  const rules = stylesOrSystems.reduce((acc, k, index) => {
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

export default (() => makeComponent(defaultPreset))();
