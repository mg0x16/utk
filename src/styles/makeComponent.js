import React from "react";

import makeStyles from "./makeStyles";

const h = React.createElement;

// dynamic variables style props must passed to be used
const makeComponent = C => {
  return stylesOrSystems => {
    // default variant prop always reserved
    let styleProps = ["variant"];

    const rules = stylesOrSystems.reduce((acc, k, index) => {
      // style system is provided
      if (k.props && k.system) {
        styleProps = [...styleProps, ...k.props];
        return { ...acc, [index]: k.system };
      }

      // normal raw style object is provided
      return { ...acc, [index]: k };
    }, {});

    const useStyles = makeStyles(rules);

    const Comp = props => {
      // copy all props
      const nextProps = {};
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
    };

    return Comp;
  };
};

export default makeComponent;
