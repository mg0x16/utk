import { system } from "./core";

const config = {
  position: true,
  top: true,
  bottom: true,
  left: true,
  right: true,
  zIndex: true,
};

const position = system(config);
const props = Object.keys(config);

export { props };
export default position;

