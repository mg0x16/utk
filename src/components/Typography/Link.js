import { makeComponent } from "../../cssinjs-system";

const Link = makeComponent("a")(["typography"], {
  supportedPseudoClasses: ["_hover", "_active", "_visited"],
  nameID: "link",
});

export default Link;
