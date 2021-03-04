import { useMemo, useState, useRef } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import _ from "lodash";

import { createCSSDeclaration, createClassName, createCSSRule } from "./css";

import { cache, insert } from "./sheet";
import parseRule from "./parseRule";

import defaultPreset from "./defaultPreset";

let UTK_CURRENT_PRESET = defaultPreset;

const stylesReducer = (styles, type, props, mediaQueries) =>
  Object.keys(styles).reduce((acc, key) => {
    const rule = styles[key][type];

    // return if no declarations found
    if (!Object.keys(rule).length) return acc;

    // parse css in js rule
    const parsed = parseRule({ rule, props, mediaQueries });
    if (!parsed.length) return acc;

    // check if in cache
    const cacheKey = JSON.stringify(parsed);
    if (cache[cacheKey]) {
      return { ...acc, [key]: cache[cacheKey] };
    }

    // generate css className
    const className = createClassName();

    // create css rule
    parsed.forEach(item => {
      const cssRule = createCSSRule({
        selector: className,
        declarations: item.declarations.map(d =>
          createCSSDeclaration(d.property, d.value),
        ),
        child: item.child,
        media: item.media,
      });

      insert(cssRule);
    });

    // save in cache
    cache[cacheKey] = className;

    return { ...acc, [key]: className };
  }, {});

const seperateRuleToStaticAndDynamic = rule =>
  Object.keys(rule).reduce(
    (acc, r) => {
      const v = rule[r];
      if (typeof v === "function") {
        return { ...acc, dynamics: { ...acc.dynamics, [r]: v } };
      }

      if (Array.isArray(v) || typeof v !== "object") {
        return { ...acc, statics: { ...acc.statics, [r]: v } };
      }

      if (typeof v === "object") {
        const result = seperateRuleToStaticAndDynamic(v);
        const extraS = Object.keys(result.statics).length
          ? { [r]: result.statics }
          : {};
        const extraD = Object.keys(result.dynamics).length
          ? { [r]: result.dynamics }
          : {};
        return {
          statics: { ...acc.statics, ...extraS },
          dynamics: { ...acc.dynamics, ...extraD },
        };
      }

      return acc;
    },
    { dynamics: {}, statics: {} },
  );

const makeStyles = preset => (stylesOrFunc, joined = false) => {
  const styles =
    typeof stylesOrFunc === "object"
      ? stylesOrFunc
      : typeof stylesOrFunc === "function"
      ? stylesOrFunc()
      : {};

  const mediaQueries = preset.breakpoints.map(
    p => `@media (min-width: ${p}px)`,
  );

  // seperate dynamic props from static (passed props vs literals data)
  const seperatedStyles = Object.keys(styles).reduce((acc, key) => {
    const rule = styles[key];

    const result = seperateRuleToStaticAndDynamic(rule);
    return { ...acc, [key]: result };
  }, {});

  return (props = {}) => {
    const [updateDynamicClasses, setUpdateDynamicClasses] = useState(false);
    const firstUpdate = useRef(false);

    // generate static classes alone to prevent recomputing
    const staticClasses = useMemo(
      () => stylesReducer(seperatedStyles, "statics"),
      [],
    );

    // generate dynamic classes when ever props change
    const dynamicsClasses = useMemo(
      () => stylesReducer(seperatedStyles, "dynamics", props, mediaQueries),

      // eslint-disable-next-line
      [updateDynamicClasses],
    );

    useDeepCompareEffect(() => {
      if (firstUpdate.current) {
        setUpdateDynamicClasses(s => !s);
      } else {
        firstUpdate.current = true;
      }
      // eslint-disable-next-line
    }, [props]);

    // merge classes
    const combinedClasses = { ...staticClasses };
    Object.keys(dynamicsClasses).forEach(k => {
      if (combinedClasses[k]) {
        combinedClasses[k] += ` ${dynamicsClasses[k]}`;
      } else {
        combinedClasses[k] = dynamicsClasses[k];
      }
    });

    if (joined) return _.values(combinedClasses).join(" ");

    return combinedClasses;
  };
};

export const setPreset = preset => {
  UTK_CURRENT_PRESET = preset;
};

export default (() => makeStyles(UTK_CURRENT_PRESET))();
