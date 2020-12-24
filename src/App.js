import React from "react";

import { makeComponent } from "./styles";

import color, { props as colorProps } from "./systems/color";
import layout, { props as layoutProps } from "./systems/layout";
import space, { props as spaceProps } from "./systems/space";
import border, { props as borderProps } from "./systems/border";
import flexbox, { props as flexboxProps } from "./systems/flexbox";
import position, { props as positionProps } from "./systems/position";
import background, { props as backgroundProps } from "./systems/shadow";
import shadow, { props as shadowProps } from "./systems/background";
import typography, { props as typographyProps } from "./systems/typography";

import variant from "./systems/variant";

const Box = makeComponent("div")(
  [
    {
      boxSizing: "border-box",
    },
    color,
    layout,
    space,
    border,
    flexbox,
    position,
    background,
    shadow,
    typography,
    variant({
      primary: {
        backgroundColor: "yellow",
        ":hover": {
          backgroundColor: "red",
        },
      },
      secondary: {
        backgroundColor: "magenta",
        ":hover": {
          fontSize: [30, 50, 60],
          backgroundColor: "green",
        },
      },
    }),
  ],
  [
    ...colorProps,
    ...layoutProps,
    ...spaceProps,
    ...borderProps,
    ...flexboxProps,
    ...positionProps,
    ...backgroundProps,
    ...shadowProps,
    ...typographyProps,
    "variant",
  ],
);

const App = () => {
  return (
    <Box
      w={[0.9, 0.7, 0.5]}
      h={[300, 400]}
      mx="auto"
      mt={[5, 6, 7]}
      b="2px solid red"
      bold
      italic
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="inset 1px 1px 12px 6px rgba(0, 0, 0, 0.4)"
      bgImage={[
        "https://i.pinimg.com/originals/38/f6/60/38f660ef385e3b0f20bb2b3e17f5c72b.jpg",
        "https://dzone.com/storage/temp/12846157-triangular-pattern.png",
      ]}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center center"
      variant="primary"
    >
      <Box
        size={[150, 200]}
        r={0.5}
        b="2px solid blue"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fs={[3, 5, 6]}
        bg="orange"
        opacity="0.8"
        textShadow="0 0 15px rgba(0, 255, 0, 0.8)"
        boxShadow="1px 1px 8px 6px rgba(0, 0, 0, 0.4)"
        variant="secondary"
      >
        UTK
      </Box>
    </Box>
  );
};

export default App;
