export const parseConfig = config => {
  return Object.keys(config).reduce((acc, k) => {
    const properties = config[k].properties || [config[k].property];

    properties.forEach(p => {
      const [n, v] = p.split(":");

      if (acc[n]) {
        acc[n].push(v ? { key: k, value: v } : k);
      } else {
        acc[n] = v ? [{ key: k, value: v }] : [k];
      }
    });

    return acc;
  }, {});
};

const firstValidValue = (props, selectors) => {
  for (let i = 0; i < Object.keys(selectors).length; i++) {
    const currentSelector = selectors[i];
    let v;

    if (typeof currentSelector === "string") {
      v = props[currentSelector];
    } else if (typeof currentSelector === "object") {
      if (props[currentSelector.key]) {
        v = currentSelector.value;
      }
    }

    // return first valid value from props
    if (v !== undefined && v !== null) return v;
  }

  return null;
};

export const system = config => {
  const parsedConfig = parseConfig(config);

  return Object.keys(parsedConfig).reduce((acc, k) => {
    return {
      ...acc,
      [k]: props => firstValidValue(props, parsedConfig[k]),
    };
  }, {});
};
