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
  ["form.checkbox"],
);

const CheckBox = ({ label, ...rest }) => (
  <Label display="flex" center>
    <Comp type="checkbox" {...rest} />
    {label}
  </Label>
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckBox;
