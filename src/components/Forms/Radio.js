import React from "react";
import PropTypes from "prop-types";
import { makeComponent } from "../../cssinjs-system";

import Label from "./Label";
import Text from "../Typography/Text";

const Comp = makeComponent("input")();

const Radio = ({ label, children, ...rest }) => (
  <Label cursor="pointer">
    <Comp type="radio" mr="formGap" cursor="pointer" {...rest} />
    {children || label ? <Text>{label}</Text> : null}
  </Label>
);

Radio.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Radio;
