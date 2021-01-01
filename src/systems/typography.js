import { system } from "./core";

const config = {
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
  },

  fontFamily: true,
  fontWeight: true,
  fontStyle: true,
  lineHeight: true,
  letterSpacing: true,
  textTransform: true,
  textAlign: true,

  left: {
    property: "textAlign:left",
  },
  right: {
    property: "textAlign:right",
  },
  center: {
    property: "textAlign:center",
  },
  italic: {
    property: "fontStyle:italic",
  },
  bold: {
    property: "fontWeight:bold",
  },
  disabled: {
    properties: ["cursor:not-allowed", "user-select:none"],
  },
};

config.fs = config.fontSize;

export default { system: system(config), props: Object.keys(config) };
