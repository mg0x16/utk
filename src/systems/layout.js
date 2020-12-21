import { system } from "./core";

const config = {
  width: {
    property: "width",
  },
  height: {
    property: "height",
  },
  size: {
    properties: ["width", "height"],
  },

  display: true,

  minWidth: true,
  maxWidth: true,
  minHeight: true,
  maxHeight: true,

  overflow: true,
  overflowX: true,
  overflowY: true,
  verticalAlign: true,
};

config.w = config.width;
config.h = config.height;

const layout = system(config);
const props = Object.keys(config);

export { props };
export default layout;
