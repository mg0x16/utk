import { system } from "./core";

const config = {
  backgroundColor: {
    property: "backgroundColor",
  },
  color: {
    property: "color",
  },
  opacity: true,
};

config.bg = config.backgroundColor;
config.c = config.color;

export default { system: system(config), props: Object.keys(config) };
