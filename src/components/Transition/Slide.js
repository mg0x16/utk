import React from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import Transition from "./Transition";

const screenH = window.innerHeight || 1200;
const screenW = window.innerWidth || 1600;

const Slide = ({
  children,
  duration = 800,
  easing = "easeInOutQuart",
  direction = "right",
  from,
  to = 0,
  ...rest
}) => {
  const fromH = from || screenW;
  const fromV = from || screenH;

  const transitionProps = {
    left: "translateX",
    right: "translateX",
    up: "translateY",
    down: "translateY",
  };
  const transitionValues = {
    left: [fromH, to],
    right: [-fromH, to],
    up: [fromV, to],
    down: [-fromV, to],
  };
  const onEnter = node =>
    anime({
      duration,
      easing,
      targets: node,
      [transitionProps[direction]]: transitionValues[direction],
    });

  const onExit = node =>
    anime({
      duration,
      easing,
      targets: node,
      [transitionProps[direction]]: transitionValues[direction].reverse(),
    });

  return (
    <Transition duration={duration} onEnter={onEnter} onExit={onExit} {...rest}>
      {children}
    </Transition>
  );
};

Slide.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  easing: PropTypes.string,
  direction: PropTypes.string,
  from: PropTypes.number,
  to: PropTypes.number,
};

export default Slide;
