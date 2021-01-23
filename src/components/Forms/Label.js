import { makeComponent } from "../../styles";

import color from "../../systems/color";
import layout from "../../systems/layout";
import space from "../../systems/space";
import border from "../../systems/border";
import position from "../../systems/position";
import background from "../../systems/background";
import shadow from "../../systems/shadow";
import flexbox from "../../systems/flexbox";

const Label = makeComponent("label")(
  [color, layout, space, border, position, background, shadow, flexbox],
  ["form.label"],
);

export default Label;
