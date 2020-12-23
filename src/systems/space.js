import { system } from "./core";

const config = {
  margin: {
    property: "margin",
    scale: "space",
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
  },
  marginX: {
    properties: ["marginRight", "marginLeft"],
    scale: "space",
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
  },
  padding: {
    property: "padding",
    scale: "space",
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
  },
  paddingX: {
    properties: ["paddingRight", "paddingLeft"],
    scale: "space",
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
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

