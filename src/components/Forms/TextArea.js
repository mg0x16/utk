import { makeComponent } from "../../styles";

import color from "../../systems/color";
import layout from "../../systems/layout";
import space from "../../systems/space";
import border from "../../systems/border";
import position from "../../systems/position";
import background from "../../systems/background";
import shadow from "../../systems/shadow";

const TextArea = makeComponent("textarea")(
  [color, layout, space, border, position, background, shadow],
  ["form.textarea"],
);

export default TextArea;
