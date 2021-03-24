import React from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import Transition from "./Transition";
import Flex from "../Layout/Flex";

const BackDrop = ({
  children,
  duration = 800,
  easing = "easeInOutQuart",
  onClick,
  ...rest
}) => {
  const onEnter = node =>
    anime({
      duration,
      easing,
      targets: node,
      opacity: [0, 1],
      background: ["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 0.6)"],
    });

  const onExit = node =>
    anime({
      duration,
      easing,
      targets: node,
      background: ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.0)"],
    });

  return (
    <Transition
      duration={duration}
      easing={easing}
      onEnter={onEnter}
      onExit={onExit}
      {...rest}
    >
      <Flex
        overflow="hidden"
        center
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        onClick={onClick}
      >
        {children}
      </Flex>
    </Transition>
  );
};

BackDrop.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  easing: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackDrop;
