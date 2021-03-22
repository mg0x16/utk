import { system } from "./core";

const config = {
  objectFit: true,

  cover: {
    property: "objectFit:cover",
  },
  contain: {
    property: "objectFit:contain",
  },
  fill: {
    property: "objectFit:fill",
  },
};

export default { system: system(config), props: Object.keys(config), config };
