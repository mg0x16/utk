const replaceCamelCaseWithHyph = s =>
  s.replace(/[A-Z]|^ms|^webkit|^moz/g, "-$&").toLowerCase();

const noAnd = s => s.replace(/&/g, "");

const parseValue = (v, props) => {
  if (typeof v === "number") return `${v}px`;

  if (typeof v === "function") return v(props);

  return v;
};

const parseRule = ({ rule, props, child = "", media = "" }) => {
  const rules = [];
  const declarations = [];

  Object.keys(rule).forEach(key => {
    // nested rules either by pseudo-classes or media query
    if (typeof rule[key] === "object") {
      const hasMedia = /^@/.test(key) ? key : "";
      const c = hasMedia ? "" : noAnd(key);

      const nestedRule = rule[key];
      parseRule({
        rule: nestedRule,
        media: hasMedia || media,
        child: c,
        props,
      }).forEach(r => {
        rules.push(r);
      });

      return;
    }

    declarations.push({
      property: replaceCamelCaseWithHyph(key),
      value: parseValue(rule[key], props),
    });
  });

  if (declarations.length) {
    rules.unshift({
      declarations,
      child,
      media,
    });
  }
  return rules;
};

export default parseRule;
