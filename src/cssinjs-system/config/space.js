import { system } from "./core";

const config = {
  margin: {
    property: "margin",
    themeKey: "spaces",
  },
  marginTop: {
    property: "marginTop",
    themeKey: "spaces",
  },
  marginRight: {
    property: "marginRight",
    themeKey: "spaces",
  },
  marginBottom: {
    property: "marginBottom",
    themeKey: "spaces",
  },
  marginLeft: {
    property: "marginLeft",
    themeKey: "spaces",
  },
  marginX: {
    properties: ["marginRight", "marginLeft"],
    themeKey: "spaces",
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    themeKey: "spaces",
  },
  padding: {
    property: "padding",
    themeKey: "spaces",
  },
  paddingTop: {
    property: "paddingTop",
    themeKey: "spaces",
  },
  paddingRight: {
    property: "paddingRight",
    themeKey: "spaces",
  },
  paddingBottom: {
    property: "paddingBottom",
    themeKey: "spaces",
  },
  paddingLeft: {
    property: "paddingLeft",
    themeKey: "spaces",
  },
  paddingX: {
    properties: ["paddingRight", "paddingLeft"],
    themeKey: "spaces",
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    themeKey: "spaces",
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

export default { system: system(config), props: Object.keys(config), config };
