import React, {
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
} from "react";
import PropTypes from "prop-types";

import Flex from "./Layout/Flex";
import BackDrop from "./Transition/BackDrop";
import Slide from "./Transition/Slide";

const Drawer = forwardRef(
  ({ children, width, isOpen: initialOpen, duration = 400 }, ref) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const open = useCallback(() => {
      setIsOpen(true);
    }, []);

    const close = useCallback(() => {
      setIsOpen(false);
    }, []);

    const toggle = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
      open,
      close,
      toggle,
    }));

    const isRTL = false;
    const extraProps = {
      [isRTL ? "right" : "left"]: 0,
    };

    return (
      <BackDrop in={isOpen} duration={duration} onClick={close}>
        <Slide
          direction={isRTL ? "left" : "right"}
          from={width}
          in={isOpen}
          duration={duration}
        >
          <Flex
            bg="white"
            w={width}
            pos="absolute"
            top="0"
            bottom="0"
            onClick={e => {
              e.stopPropagation();
            }}
            {...extraProps}
          >
            {children}
          </Flex>
        </Slide>
      </BackDrop>
    );
  },
);

Drawer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  duration: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default Drawer;
