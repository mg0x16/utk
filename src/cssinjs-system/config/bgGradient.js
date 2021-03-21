import { system } from "./core";

const config = {
  bgGradient: {
    property: "backgroundImage",
  },
  bgClip: {
    property: "background-clip",
  },
};

export default { system: system(config), props: Object.keys(config) };
