import React from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import Transition from "./Transition";

const Fade = ({
  children,
  duration = 800,
  easing = "easeInOutQuart",
  from = 0,
  to = 1,
  ...rest
}) => {
  const onEnter = node =>
    anime({
      duration,
      easing,
      targets: node,
      opacity: [from, to],
    });

  const onExit = node =>
    anime({
      duration,
      easing,
      targets: node,
      opacity: [to, from],
    });

  return (
    <Transition duration={duration} onEnter={onEnter} onExit={onExit} {...rest}>
      {children}
    </Transition>
  );
};

Fade.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  easing: PropTypes.string,
  from: PropTypes.number,
  to: PropTypes.number,
};

export default Fade;
