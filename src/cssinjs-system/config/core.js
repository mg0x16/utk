import _ from "lodash";

import { getPreset } from "../preset";

export const parseConfig = config =>
  Object.keys(config).reduce((acc, k) => {
    let properties;
    if (typeof config[k] === "boolean" && config[k]) {
      // default property declaration
      properties = [k];
    } else {
      // custom properties declaration
      properties = config[k].properties || [config[k].property];
    }

    properties.forEach(p => {
      const [n, v] = p.split(":");

      if (acc[n]) {
        acc[n].push({
          key: k,
          value: v || "",
          transform: config[k].transform,
          themeKey: config[k].themeKey,
        });
      } else {
        acc[n] = [
          {
            key: k,
            value: v || "",
            transform: config[k].transform,
            themeKey: config[k].themeKey,
          },
        ];
      }
    });

    return acc;
  }, {});

// handle value transform using transform fn
const getTransformedValue = (value, transform) => {
  let result;

  // transform single value and array of values
  if (Array.isArray(value))
    result = value.map(v => getTransformedValue(v, transform));
  else result = transform(value);

  return result;
};

// get theme key value
const getThemeKeyValue = (value, themeKey) => {
  const preset = getPreset();

  let result = value;

  if (Array.isArray(value))
    result = value.map(v => _.get(preset, `${themeKey}.${v}`, v));
  else {
    result = _.get(preset, `${themeKey}.${value}`, value);
  }

  return result;
};

const firstValidValue = (props, selectors) => {
  for (let i = 0; i < Object.keys(selectors).length; i++) {
    const currentSelector = selectors[i];
    let v;

    // check if property is passed either  props=value or boolean
    if (_.has(props, currentSelector.key)) {
      // boolean
      if (currentSelector.value) {
        // handle props sent as array of boolean values (for query media)
        const r = props[currentSelector.key];
        if (Array.isArray(r)) {
          v = r.map(rv => (rv ? currentSelector.value : ""));
        } else if (r) {
          v = currentSelector.value;
        }
      }
      // assignment props=value
      else if (!currentSelector.value) {
        v = props[currentSelector.key];
      }

      // transform value if transform exists
      if (currentSelector.transform) {
        v = getTransformedValue(v, currentSelector.transform);
      }

      // get values from predefined presets (themeKey)
      if (currentSelector.themeKey) {
        v = getThemeKeyValue(v, currentSelector.themeKey);
      }
    }

    // return first valid value from props
    if (v !== undefined && v !== null) return v;
  }

  return null;
};

export const system = (config, nestedProp) => {
  const parsedConfig = parseConfig(config);

  return Object.keys(parsedConfig).reduce(
    (acc, k) => ({
      ...acc,
      [k]: props =>
        firstValidValue(_.get(props, nestedProp, props), parsedConfig[k]),
    }),
    {},
  );
};
