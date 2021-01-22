import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "../styles";

import color from "../systems/color";
import space from "../systems/space";
import border from "../systems/border";
import shadow from "../systems/shadow";
import typography from "../systems/typography";
import position from "../systems/position";

const useStyles = makeStyles({
  root: {
    ...color.system,
    ...space.system,
    ...border.system,
    ...shadow.system,
    ...position.system,
    ...typography.system,
  },
  spin: {
    animation: "spinning 1s linear infinite",
  },
  flip: {
    transform: "scale(-1)",
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
