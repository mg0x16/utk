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

const color = system(config);
const props = Object.keys(config);

export { props };
export default color;
