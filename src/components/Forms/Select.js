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

const Comp = makeComponent("select")(
  [color, layout, space, border, position, background, shadow],
  ["form.select"],
);

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
