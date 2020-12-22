const cache = {};
const cssRules = [];
const prefix = "_utk_";
let insert = rule => cssRules.push(rule);

if (typeof document !== "undefined") {
  const style = document.head.appendChild(document.createElement("style"));
  const { sheet } = style;
  style.id = "main";
  insert = rule => {
    cssRules.push(rule);
    sheet.insertRule(rule, sheet.cssRules.length);
  };
}

export { cache, prefix, cssRules, insert };

