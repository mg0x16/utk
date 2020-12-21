import { system } from "./core";

const config = {
  background: true,

  backgroundImage: {
    property: "backgroundImage",
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
};

config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;

const background = system(config);
const props = Object.keys(config);

export { props };
export default background;
