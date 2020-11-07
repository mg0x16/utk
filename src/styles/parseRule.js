const parseRule = ({ rule, props }) => {
  return Object.keys(rule).map(p => ({
    property: p,
    value: rule[p],
  }));
};

export default parseRule;
