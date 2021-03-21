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

  minWidth: {
    property: "minWidth",
  },
  maxWidth: {
    property: "maxWidth",
  },
  minHeight: {
    property: "minHeight",
  },
  maxHeight: {
    property: "maxHeight",
  },

  display: {
    property: "display",
  },

  overflow: true,
  overflowX: true,
  overflowY: true,
  verticalAlign: true,
};

config.d = config.display;
config.w = config.width;
config.h = config.height;
config.maxW = config.maxWidth;
config.minW = config.minWidth;
config.maxH = config.maxHeight;
config.minH = config.minHeight;

export default { system: system(config), props: Object.keys(config) };
