import { makeComponent } from "../styles";

import color from "../systems/color";
import layout from "../systems/layout";
import space from "../systems/space";
import border from "../systems/border";
import shadow from "../systems/shadow";
import typography from "../systems/typography";

const Paragraph = makeComponent("p")([
  color,
  layout,
  space,
  border,
  shadow,
  typography,
]);

export default Paragraph;
