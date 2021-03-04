import { prefix, cssRules } from "./sheet";

export const createClassName = () => prefix + cssRules.length.toString(36);

const mx = (rule, media) => (media ? `${media}{${rule}}` : rule);

export const createCSSRule = ({
  selector,
  declarations,
  media,
  child = "",
}) => {
  return mx(`.${selector + child}{${declarations.join(";")}}`, media);
};

export const createCSSDeclaration = (p, v) => {
  return `${p}:${v}`;
};
