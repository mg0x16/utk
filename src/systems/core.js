import _ from "lodash";
import presets from "../theme/presets";

export const parseConfig = (config, scalesObj = {}) => {
  return Object.keys(config).reduce((acc, k) => {
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
          scale: scalesObj[config[k].scale],
          transform: config[k].transform,
        });
      } else {
        acc[n] = [
          {
            key: k,
            value: v || "",
            scale: scalesObj[config[k].scale],
            transform: config[k].transform,
          },
        ];
      }
    });

    return acc;
  }, {});
};

const getScaledValue = (value, scale) => {
  // ignore scaling if string
  if (typeof value === "string") return value;

  // return original value of outbound of scale
  if (typeof value === "number" && (value < 0 || value > scale.length - 1))
    return value;

  let result;
  if (Array.isArray(value)) result = value.map(v => getScaledValue(v, scale));
  else result = scale[value];

  return result;
};

const getTransformedValue = (value, transform) => {
  let result;
  if (Array.isArray(value))
    result = value.map(v => getTransformedValue(v, transform));
  else result = transform(value);

  return result;
};

const firstValidValue = (props, selectors) => {
  for (let i = 0; i < Object.keys(selectors).length; i++) {
    const currentSelector = selectors[i];
    let v;

    // get either predefined value for boolean or passed value
    if (_.has(props, currentSelector.key)) {
      // boolean
      if (currentSelector.value) {
        // this is boolean value or array of boolean values
        const r = props[currentSelector.key];
        if (Array.isArray(r)) {
          v = r.map(rv => (rv ? currentSelector.value : ""));
        } else if (r) {
          v = currentSelector.value;
        }
      } else if (!currentSelector.value) {
        // assignment
        v = props[currentSelector.key];
      }

      // transform value if transform exists
      if (currentSelector.transform) {
        v = getTransformedValue(v, currentSelector.transform);
      }

      // transform value if scale exists
      if (currentSelector.scale) {
        v = getScaledValue(v, currentSelector.scale);
      }
    }

    // return first valid value from props
    if (v !== undefined && v !== null) return v;
  }

  return null;
};

export const system = (config, sc) => {
  const parsedConfig = parseConfig(config, sc || presets);

  return Object.keys(parsedConfig).reduce((acc, k) => {
    return {
      ...acc,
      [k]: props => {
        return firstValidValue(props, parsedConfig[k]);
      },
    };
  }, {});
};
