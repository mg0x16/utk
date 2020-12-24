const replaceCamelCaseWithHyph = s =>
  s.replace(/[A-Z]|^ms|^webkit|^moz/g, "-$&").toLowerCase();

const noAnd = s => s.replace(/&/g, "");

const parseValue = (v, props) => {
  if (typeof v === "number") {
    if (v === 0) return 0;
    if (Math.abs(v) <= 1 && Math.abs(v) > 0) {
      return `${Math.round(v * 100)}%`;
    }
    return `${v}px`;
  }

  if (typeof v === "function") return parseValue(v(props));

  return v || "";
};

const breakpoints = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
};

const mediaQueries = [
  `@media (max-width: ${breakpoints.xs}px), (min-width: 0)`,
  `@media (max-width: ${breakpoints.sm}px) and (min-width: ${breakpoints.xs}px), (min-width: ${breakpoints.sm}px)`,
  `@media (max-width: ${breakpoints.md}px) and (min-width: ${breakpoints.sm}px), (min-width: ${breakpoints.md}px)`,
  `@media (max-width: ${breakpoints.lg}px) and (min-width: ${breakpoints.md}px), (min-width: ${breakpoints.lg}px)`,
];

const parseRule = ({ rule, props = {}, child = "", media = "" }) => {
  const rules = [];
  const declarations = [];

  Object.keys(rule).forEach(key => {
    // resolve value
    const resolvedValue = parseValue(rule[key], props);
    if (resolvedValue === "") return;

    // nested rules either by pseudo-classes or media query
    if (typeof resolvedValue === "object" && !Array.isArray(resolvedValue)) {
      const hasMedia = /^@/.test(key) ? key : "";
      const c = hasMedia ? "" : noAnd(key);

      parseRule({
        rule: resolvedValue,
        media: hasMedia || media,
        child: c,
        props,
      }).forEach(r => {
        rules.push(r);
      });

      return;
    }

    // array values is considered values for responsive sizes
    if (Array.isArray(resolvedValue)) {
      resolvedValue.forEach((k, index) => {
        rules.push({
          declarations: [
            { property: replaceCamelCaseWithHyph(key), value: parseValue(k) },
          ],
          media: mediaQueries[index],
          child,
        });
      });
      return;
    }

    // at here value can be either string, number or ( function => that return number,string )
    declarations.push({
      property: replaceCamelCaseWithHyph(key),
      value: resolvedValue,
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
