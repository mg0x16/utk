import React from "react";
import PropTypes from "prop-types";

import { makeComponent } from "../styles";

import color from "../systems/color";
import layout from "../systems/layout";
import space from "../systems/space";
import border from "../systems/border";
import shadow from "../systems/shadow";
import typography from "../systems/typography";

const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Comps = tags.reduce((acc, item) => {
  acc[item] = makeComponent(item)(
    [color, layout, space, border, shadow, typography],
    ["typography.root", `typography.${item}`],
  );

  return acc;
}, {});

const Title = ({ as = "h1", ...rest }) => {
  const Comp = Comps[as];

  return <Comp {...rest} />;
};

Title.propTypes = {
  as: PropTypes.oneOf(tags),
};

export default Title;
