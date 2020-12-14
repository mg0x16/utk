import React from "react";

import makeStyles from "./makeStyles";

const h = React.createElement;

// dynamic variables style props must passed to be used
const makeComponent = C => {
  return (styles, styleProps) => {
    const useStyles = makeStyles({ root: styles });

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
      const className = `${classes.root || ""} ${props.className || ""}`.trim();

      if (className.length) {
        nextProps.className = className;
      }

      return h(C, nextProps);
    };

    return Comp;
  };
};

export default makeComponent;
