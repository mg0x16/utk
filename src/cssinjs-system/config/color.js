import { system } from "./core";

const config = {
  backgroundColor: {
    property: "backgroundColor",
    themeKey: "palette",
  },
  color: {
    property: "color",
    themeKey: "palette",
  },
  opacity: true,
};

config.bg = config.backgroundColor;
config.c = config.color;

export default { system: system(config), props: Object.keys(config) };
