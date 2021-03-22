import { makeComponent } from "../../cssinjs-system";

const Flex = makeComponent("div")([
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  "flexbox",
  "bgImage",
  "bgGradient",
]);

export default Flex;
