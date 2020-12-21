import { system } from "./core";

const config = {
  boxShadow: true,
  textShadow: true,
};

const shadow = system(config);
const props = Object.keys(config);

export { props };

export default shadow;

