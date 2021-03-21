import { makeComponent } from "../../cssinjs-system";

const Box = makeComponent("div")([
  "color",
  "layout",
  "space",
  "border",
  "flexbox",
  "position",
  "shadow",
  "typography",
  "bgImage",
  "bgGradient",
]);

export default Box;
