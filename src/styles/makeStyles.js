import { useMemo } from "react";

import { createCSSDeclaration, createClassName, createCSSRule } from "./css";

import { cache, insert } from "./sheet";
import parseRule from "./parseRule";

const makeStyles = stylesOrFunc => {
  const styles =
    typeof stylesOrFunc === "object"
      ? stylesOrFunc
      : typeof stylesOrFunc === "function"
      ? stylesOrFunc()
      : {};

  const keys = Object.keys(styles);

  return (props = {}) =>
    useMemo(() => {
      return keys.reduce((acc, key) => {
        const rule = styles[key];

        // parse css in js rule
        const parsed = parseRule({ rule, props });

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
    }, [props]);
};

export default makeStyles;
