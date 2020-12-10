const replaceCamelCaseWithHyph = s =>
  s.replace(/[A-Z]|^ms|^webkit|^moz/g, "-$&").toLowerCase();

const parseRule = ({ rule, props }) => {
  return Object.keys(rule).map(p => ({
    property: replaceCamelCaseWithHyph(p),
    value: rule[p],
  }));
};

export default parseRule;
