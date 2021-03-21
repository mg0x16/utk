import { makeComponent } from "../../cssinjs-system";

const Flex = makeComponent("div")([
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  "flexbox",
  "typography",
  "bgImage",
  "bgGradient",
]);

export default Flex;
