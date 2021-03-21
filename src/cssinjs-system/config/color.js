import { system } from "./core";

const config = {
  background: {
    property: "background",
    themeKey: "colors",
  },
  bgColor: {
    property: "backgroundColor",
    themeKey: "colors",
  },
  color: {
    property: "color",
    themeKey: "colors",
  },
  opacity: true,
};

config.bg = config.background;
config.c = config.color;

export default { system: system(config), props: Object.keys(config), config };
