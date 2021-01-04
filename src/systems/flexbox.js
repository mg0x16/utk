import { system } from "./core";

const config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,

  row: {
    property: "flexDirection:row",
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
};

export default { system: system(config), props: Object.keys(config) };
