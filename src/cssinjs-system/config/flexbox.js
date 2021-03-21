import { system } from "./core";

const config = {
  alignItems: {
    property: "alignItems",
  },
  justifyContent: {
    property: "justifyContent",
  },

  flexDirection: {
    property: "flexDirection",
  },

  flexWrap: {
    property: "flexWrap",
  },

  row: {
    property: "flexDirection:row",
  },

  column: {
    property: "flexDirection:column",
  },

  rowReverse: {
    property: "flexDirection:row-reverse",
  },

  columnReverse: {
    property: "flexDirection:column-reverse",
  },

  start: {
    property: "justifyContent:flex-start",
  },

  end: {
    property: "justifyContent:flex-end",
  },

  between: {
    property: "justifyContent:space-between",
  },

  around: {
    property: "justifyContent:space-around",
  },

  evenly: {
    property: "justifyContent:space-evenly",
  },

  centerM: {
    property: "justifyContent:center",
  },

  centerC: {
    property: "alignItems:center",
  },

  center: {
    properties: ["alignItems:center", "justifyContent:center"],
  },

  flex: true,
  alignContent: true,
  justifyItems: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
};

config.align = config.alignItems;
config.justify = config.justifyContent;
config.wrap = config.flexWrap;
config.flexDir = config.flexDirection;

export default { system: system(config), props: Object.keys(config), config };
