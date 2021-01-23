import React from "react";
import PropTypes from "prop-types";
import { makeComponent } from "../../styles";

import color from "../../systems/color";
import layout from "../../systems/layout";
import space from "../../systems/space";
import border from "../../systems/border";
import position from "../../systems/position";
import background from "../../systems/background";
import shadow from "../../systems/shadow";

import Label from "./Label";

const Comp = makeComponent("input")(
  [color, layout, space, border, position, background, shadow],
  ["form.radio"],
);

const Radio = ({ label, ...rest }) => (
  <Label display="flex" center>
    <Comp type="radio" {...rest} />
    {label}
  </Label>
);

Radio.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Radio;
