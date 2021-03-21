import React from "react";
import PropTypes from "prop-types";
import { makeComponent } from "../../cssinjs-system";

import Label from "./Label";
import Text from "../Typography/Text";

const Comp = makeComponent("input")([{ flex: "1" }]);

const Slider = ({ label, ...rest }) => (
  <Label d="flex">
    <Text>{label}</Text>
    <Comp ml="formGap" type="range" {...rest} />
  </Label>
);

Slider.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Slider;
