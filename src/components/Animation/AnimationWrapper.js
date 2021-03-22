import React, { useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import anime from "animejs";

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const AnimationWrapper = ({
  children,
  duration = 1000,
  easing = "easeInOutQuad",
  status,
  onEntering,
  onEntered,
  onExiting,
  onExited,
  animeRef,
  ...rest
}) => {
  const childsRefs = useRef([]);

  const addTargetRef = useCallback(target => {
    if (target) childsRefs.current = [...childsRefs.current, target];
  }, []);

  useEffect(() => {
    if (!childsRefs.current || !childsRefs.current.length) return;

    const animationOptions = { onEntering, onEntered, onExited, onExiting };

    // build options
    let animeOptions = {
      targets: childsRefs.current,
      duration,
      easing,
      ...rest,
    };

    const stateIdentifier = `on${capitalize(status)}`;

    if (animationOptions[stateIdentifier]) {
      animeOptions = {
        ...animeOptions,
        ...animationOptions[stateIdentifier],
      };
    }

    const animeInstance = anime(animeOptions);
    if (animeRef) {
      animeRef.current = animeInstance;
    }

    return () => {
      if (childsRefs.current) anime.remove(childsRefs.current);
    };
    // eslint-disable-next-line
  }, [animeRef, duration, easing, status]);

  return (
    <>
      {React.Children.map(
        children,
        (child, i) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            ref: addTargetRef,
          }),
      )}
    </>
  );
};

AnimationWrapper.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  easing: PropTypes.string,
  status: PropTypes.string,
  onEntered: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  onEntering: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  onExited: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  onExiting: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
};

export default AnimationWrapper;
