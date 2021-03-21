import React from "react";
import PropTypes from "prop-types";
import { makeComponent } from "../../cssinjs-system";

import Label from "./Label";
import Text from "../Typography/Text";

const Comp = makeComponent("input")();

const CheckBox = ({ label, children, ...rest }) => (
  <Label cursor="pointer">
    <Comp type="checkbox" mr="formGap" cursor="pointer" {...rest} />
    {children || label ? <Text>{label}</Text> : null}
  </Label>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default CheckBox;
