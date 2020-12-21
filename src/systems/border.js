import { system } from "./core";

const config = {
  border: {
    property: "border",
  },
  borderWidth: {
    property: "borderWidth",
  },
  borderStyle: {
    property: "borderStyle",
  },
  borderColor: {
    property: "borderColor",
  },
  borderTop: {
    property: "borderTop",
  },
  borderTopWidth: {
    property: "borderTopWidth",
  },
  borderTopStyle: {
    property: "borderTopStyle",
  },
  borderTopColor: {
    property: "borderTopColor",
  },
  borderRight: {
    property: "borderRight",
  },
  borderRightWidth: {
    property: "borderRightWidth",
  },
  borderRightStyle: {
    property: "borderRightStyle",
  },
  borderRightColor: {
    property: "borderRightColor",
  },
  borderBottom: {
    property: "borderBottom",
  },
  borderBottomWidth: {
    property: "borderBottomWidth",
  },
  borderBottomStyle: {
    property: "borderBottomStyle",
  },
  borderBottomColor: {
    property: "borderBottomColor",
  },
  borderLeft: {
    property: "borderLeft",
  },
  borderLeftWidth: {
    property: "borderLeftWidth",
  },
  borderLeftStyle: {
    property: "borderLeftStyle",
  },
  borderLeftColor: {
    property: "borderLeftColor",
  },
  borderRadius: {
    property: "borderRadius",
  },
  borderTopLeftRadius: {
    property: "borderTopLeftRadius",
  },
  borderTopRightRadius: {
    property: "borderTopRightRadius",
  },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
  },
};

config.b = config.border;
config.bw = config.borderWidth;
config.bs = config.borderStyle;
config.bc = config.borderColor;
config.bt = config.borderTop;
config.btw = config.borderTopWidth;
config.bts = config.borderTopStyle;
config.btc = config.borderTopColor;
config.br = config.borderRight;
config.brw = config.borderRightWidth;
config.brs = config.borderRightStyle;
config.brc = config.borderRightColor;
config.bb = config.borderBottom;
config.bbw = config.borderBottomWidth;
config.bbs = config.borderBottomStyle;
config.bbc = config.borderBottomColor;
config.bl = config.borderLeft;
config.blw = config.borderLeftWidth;
config.bls = config.borderLeftStyle;
config.blc = config.borderLeftColor;

config.r = config.borderRadius;
config.rtl = config.borderTopLeftRadius;
config.rtr = config.borderTopRightRadius;
config.rbl = config.borderBottomLeftRadius;
config.rbr = config.borderBottomRightRadius;

const border = system(config);
const props = Object.keys(config);

export { props };

export default border;

