import { prefix, cssRules } from "./sheet";

export const createClassName = () => prefix + cssRules.length.toString(36);

export const createCSSRule = ({ selector, declarations, child = "" }) => {
  return `.${selector + child}{${declarations.join(";")}}`;
};

export const createCSSDeclaration = (p, v) => {
  return `${p}:${v}`;
};
