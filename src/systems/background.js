import { system } from "./core";

const config = {
  background: true,

  backgroundImage: {
    property: "backgroundImage",
    transform: x => `url(${x})`,
  },
  backgroundSize: {
    property: "backgroundSize",
  },
  backgroundPosition: {
    property: "backgroundPosition",
  },
  backgroundRepeat: {
    property: "backgroundRepeat",
  },

  cover: {
    property: "backgroundSize:cover",
  },
  contain: {
    property: "backgroundSize:contain",
  },
};

config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;

export default { system: system(config), props: Object.keys(config) };
