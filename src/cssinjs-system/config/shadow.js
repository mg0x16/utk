import { system } from "./core";

const config = {
  boxShadow: true,
  textShadow: true,
};

export default { system: system(config), props: Object.keys(config) };
