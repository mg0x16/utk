import { system } from "./core";

const config = {
  position: {
    property: "position",
  },

  zIndex: {
    property: "zIndex",
    themeKey: "zIndices",
  },

  top: {
    property: "top",
    themeKey: "spaces",
  },
  bottom: {
    property: "bottom",
    themeKey: "spaces",
  },
  left: {
    property: "left",
    themeKey: "spaces",
  },
  right: {
    property: "right",
    themeKey: "spaces",
  },
};

config.pos = config.position;

export default { system: system(config), props: Object.keys(config), config };
