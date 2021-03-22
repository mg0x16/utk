import { system } from "./core";

const config = {
  boxShadow: {
    property: "boxShadow",
    themeKey: "shadows",
  },
  textShadow: {
    property: "textShadow",
    themeKey: "shadows",
  },
};

export default { system: system(config), props: Object.keys(config), config };
