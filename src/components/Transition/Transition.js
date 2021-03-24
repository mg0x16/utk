import React from "react";
import { Transition as ReactTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Transition = ({
  children,
  duration = 1000,
  mountOnEnter = true,
  unmountOnExit = true,
  appear = true,
  in: inProps,
  ...rest
}) => (
  <ReactTransition
    in={inProps}
    timeout={duration}
    appear={appear}
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    {...rest}
  >
    {children}
  </ReactTransition>
);

Transition.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
};

export default Transition;
