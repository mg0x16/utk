import { makeComponent } from "../../cssinjs-system";

const Paragraph = makeComponent("p")([
  "color",
  "layout",
  "space",
  "border",
  "shadow",
  "typography",
]);

export default Paragraph;
