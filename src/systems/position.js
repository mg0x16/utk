import { system } from "./core";

const config = {
  position: true,
  top: true,
  bottom: true,
  left: true,
  right: true,
  zIndex: true,
};

export default { system: system(config), props: Object.keys(config) };
