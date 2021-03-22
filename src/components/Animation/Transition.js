import React from "react";
import { Transition as ReactTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Animation from "./AnimationWrapper";

const Transition = ({
  children,
  duration,
  mountOnEnter = true,
  unmountOnExit = true,
  appear = false,
  in: inProps,
  ...rest
}) => (
  <ReactTransition
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    timeout={duration}
    appear={appear}
    in={inProps}
  >
    {status => (
      <Animation duration={duration} status={status} {...rest}>
        {children}
      </Animation>
    )}
  </ReactTransition>
);

Transition.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool,
  in: PropTypes.bool,
};

export default Transition;
