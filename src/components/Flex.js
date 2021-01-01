import { makeComponent } from "../styles";

import color from "../systems/color";
import layout from "../systems/layout";
import space from "../systems/space";
import border from "../systems/border";
import flexbox from "../systems/flexbox";
import position from "../systems/position";
import background from "../systems/background";
import shadow from "../systems/shadow";

const View = makeComponent("div")([
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  color,
  layout,
  space,
  border,
  flexbox,
  position,
  background,
  shadow,
]);

export default View;
