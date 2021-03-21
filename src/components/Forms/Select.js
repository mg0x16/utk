import React from "react";
import PropTypes from "prop-types";
import { makeComponent } from "../../cssinjs-system";

const Comp = makeComponent("select")();

const Select = ({ children, options = [], ...rest }) => (
  <Comp {...rest}>
    {children ||
      options.map((o, i) => <option key={o.value || i}>{o.label}</option>)}
  </Comp>
);

Select.propTypes = {
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
