import React from "react";
import PropTypes from "prop-types";

import { makeComponent } from "../../cssinjs-system";

const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Comps = tags.reduce((acc, item) => {
  acc[item] = makeComponent(item)([
    "color",
    "layout",
    "space",
    "border",
    "shadow",
    "typography",
  ]);

  return acc;
}, {});

const Header = ({ as = "h1", ...rest }) => {
  const Comp = Comps[as];

  return <Comp {...rest} />;
};

Header.propTypes = {
  as: PropTypes.oneOf(tags),
};

export default Header;
