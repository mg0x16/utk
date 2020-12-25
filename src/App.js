import React from "react";

import { makeComponent } from "./styles";

import color from "./systems/color";
import layout from "./systems/layout";
import space from "./systems/space";
import border from "./systems/border";
import flexbox from "./systems/flexbox";
import position from "./systems/position";
import background from "./systems/background";
import shadow from "./systems/shadow";
import typography from "./systems/typography";
import variant from "./systems/variant";

const Box = makeComponent("div")([
  {
    boxSizing: "border-box",
    transition: "all 0.2s",
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
]);

const App = () => {
  return (
    <Box
      w={[0.9, 0.7, 0.5]}
      h={[300, 400]}
      mx="auto"
      mt={[5, 6, 7]}
      b="2px solid red"
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
        fs={7}
        bold={[false, true]}
        italic={[false, true]}
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
