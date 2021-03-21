import { system } from "./core";

const config = {
  background: {
    property: "background",
  },
  bgColor: {
    property: "backgroundColor",
  },
  color: {
    property: "color",
  },
  opacity: true,
};

config.bg = config.background;
config.c = config.color;

export default { system: system(config), props: Object.keys(config) };
