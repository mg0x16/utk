import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "../../cssinjs-system";

import color from "../../cssinjs-system/config/color";
import space from "../../cssinjs-system/config/space";
import border from "../../cssinjs-system/config/border";
import shadow from "../../cssinjs-system/config/shadow";
import typography from "../../cssinjs-system/config/typography";
import position from "../../cssinjs-system/config/position";
import cursor from "../../cssinjs-system/config/cursor";

const useStyles = makeStyles({
  root: {
    ...color.system,
    ...space.system,
    ...border.system,
    ...shadow.system,
    ...position.system,
    ...typography.system,
    ...cursor.system,
  },
  spin: {
    animation: "spinning 1s linear infinite",
  },
  flip: {
    transform: "scaleX(-1)",
  },
});

const Icon = ({ icon: TargetIcon, spin, flip, ...rest }) => {
  const classes = useStyles(rest);

  const className = useMemo(() => {
    let n = classes.root;
    if (spin) n += ` ${classes.spin}`;
    if (flip) n += ` ${classes.flip}`;

    return n;
  }, [spin, flip, classes]);

  return <TargetIcon className={className} />;
};

Icon.propTypes = {
  icon: PropTypes.func.isRequired,
  spin: PropTypes.bool,
  flip: PropTypes.bool,
};

export default Icon;
