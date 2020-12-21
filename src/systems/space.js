import { system } from "./core";

const config = {
  margin: {
    property: "margin",
  },
  marginTop: {
    property: "marginTop",
  },
  marginRight: {
    property: "marginRight",
  },
  marginBottom: {
    property: "marginBottom",
  },
  marginLeft: {
    property: "marginLeft",
  },
  marginX: {
    properties: ["marginRight", "marginLeft"],
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
  },
  padding: {
    property: "padding",
  },
  paddingTop: {
    property: "paddingTop",
  },
  paddingRight: {
    property: "paddingRight",
  },
  paddingBottom: {
    property: "paddingBottom",
  },
  paddingLeft: {
    property: "paddingLeft",
  },
  paddingX: {
    properties: ["paddingRight", "paddingLeft"],
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
  },
};

config.m = config.margin;
config.mt = config.marginTop;
config.mr = config.marginRight;
config.mb = config.marginBottom;
config.ml = config.marginLeft;
config.mx = config.marginX;
config.my = config.marginY;

config.p = config.padding;
config.pt = config.paddingTop;
config.pr = config.paddingRight;
config.pb = config.paddingBottom;
config.pl = config.paddingLeft;
config.px = config.paddingX;
config.py = config.paddingY;

const space = system(config);
const props = Object.keys(config);

export { props };
export default space;

