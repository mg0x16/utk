import { system } from "./core";

const config = {
  bgImage: {
    property: "backgroundImage",
    transform: x => `url(${x})`,
  },
  bgSize: {
    property: "backgroundSize",
  },
  bgPosition: {
    property: "backgroundPosition",
  },
  bgRepeat: {
    property: "backgroundRepeat",
  },
  bgAttachment: {
    property: "backgroundAttachment",
  },

  cover: {
    property: "backgroundSize:cover",
  },
  contain: {
    property: "backgroundSize:contain",
  },
};

export default { system: system(config), props: Object.keys(config), config };
