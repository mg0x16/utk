import { makeComponent } from "../../cssinjs-system";

const Flex = makeComponent("div")([
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  "color",
  "layout",
  "space",
  "border",
  "flexbox",
  "position",
  "background",
  "shadow",
  "typography",
]);

export default Flex;
