import React from "react";
import PropTypes from "prop-types";

import { makeComponent } from "../styles";

import color from "../systems/color";
import layout from "../systems/layout";
import space from "../systems/space";
import border from "../systems/border";
import shadow from "../systems/shadow";
import typography from "../systems/typography";

const tags = {
  span: "span",
  underline: "u",
  delete: "del",
  strong: "strong",
  code: "code",
  keyboard: "kbd",
  mark: "mark",
};

const Comps = Object.keys(tags).reduce((acc, name) => {
  const tag = tags[name];

  acc[name] = makeComponent(tag)([
    color,
    layout,
    space,
    border,
    shadow,
    typography,
  ]);

  return acc;
}, {});

const Text = ({
  children,
  strong,
  underline,
  delete: deleteProp,
  code,
  keyboard,
  mark,
  ...rest
}) => {
  let Comp = Comps.span;

  if (strong) Comp = Comps.strong;
  else if (underline) Comp = Comps.underline;
  else if (deleteProp) Comp = Comps.delete;
  else if (code) Comp = Comps.code;
  else if (keyboard) Comp = Comps.keyboard;
  else if (mark) Comp = Comps.mark;

  return <Comp {...rest}>{children}</Comp>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  delete: PropTypes.bool,
  code: PropTypes.bool,
  keyboard: PropTypes.bool,
  mark: PropTypes.bool,
};

export default Text;
