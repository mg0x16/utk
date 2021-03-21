import { system } from "./core";

const config = {
  cursor: {
    property: "cursor",
  },
  userSelect: {
    property: "userSelect",
  },
};

export default { system: system(config), props: Object.keys(config), config };
