const replaceCamelCaseWithHyph = s =>
  s.replace(/[A-Z]|^ms|^webkit|^moz/g, "-$&").toLowerCase();

const noAnd = s => s.replace(/&/g, "");

const parseRule = ({ rule, props }) => {
  const rules = [];
  const declarations = [];

  Object.keys(rule).forEach(key => {
    // detected nest pseudo-classes and parse them
    if (typeof rule[key] === "object") {
      const nestedRule = rule[key];
      const dd = [];
      Object.keys(nestedRule).forEach(nr => {
        dd.push({
          property: replaceCamelCaseWithHyph(nr),
          value: nestedRule[nr],
        });
      });
      if (dd.length) {
        rules.push({
          declarations: dd,
          child: noAnd(key),
        });
      }
      return;
    }

    declarations.push({
      property: replaceCamelCaseWithHyph(key),
      value: rule[key],
    });
  });

  if (declarations.length) {
    rules.unshift({
      declarations,
      child: "",
    });
  }
  return rules;
};

export default parseRule;
