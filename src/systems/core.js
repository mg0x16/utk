export const parseConfig = config => {
  return Object.keys(config).reduce((acc, k) => {
    const pr = config[k].property;

    // create new if not exist
    acc[pr] = acc[pr] || {};

    // add new key to point to the property
    if (acc[pr].keys) {
      acc[pr].keys.push(k);
    } else {
      acc[pr].keys = [k];
    }

    return acc;
  }, {});
};

const firstValidValue = (props, keys) => {
  for (let i = 0; i < Object.keys(keys).length; i++) {
    const v = props[keys[i]];
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
      [k]: props => firstValidValue(props, parsedConfig[k].keys),
    };
  }, {});
};
