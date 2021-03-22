import React, { useEffect, useState } from "react";

import makeComponent from "./cssinjs-system/makeComponent";
import {
  Box,
  Flex,
  Icon,
  Paragraph,
  Text,
  Header,
  Link,
  Button,
  Image,
  CheckBox,
  Radio,
  Input,
  Slider,
  Switch,
} from "./components";
import { makeStyles } from "./cssinjs-system";

import Transition from "./components/Animation/Transition";
import AnimationWrapper from "./components/Animation/AnimationWrapper";
import { ThemeProvider } from "./theme";

// import { FiLoader } from "react-icons/fi";

import {
  FaSearch,
  FaSpinner,
  FaStarAndCrescent,
  FaMicrochip,
} from "react-icons/fa";

const App = () => {
  // const classes = useStyles();

  const [x, setX] = useState(true);

  return (
    <ThemeProvider>
      <Flex flex="1" w={1} center>
        <Button
          pos="absolute"
          top={200}
          onClick={() => {
            setX(!x);
          }}
          title="Click Me"
          icon={FaSearch}
          mb="3"
        />
        <Transition
          in={x}
          onExiting={{ translateX: 500 }}
          onEntering={{ translateX: 0 }}
          onEntered={{ translateX: 0 }}
          onExited={{ translateX: 500 }}
          unmountOnExit={false}
          duration={1000}
          // delay={(el, i) => i * 100}
        >
          <Flex size={200} bg="red.500" center>
            <AnimationWrapper
              loop
              translateX={[-100, 100]}
              direction="alternate"
              duration={400}
            >
              <Box size={0.5} r={100} bg="yellow.500" />
            </AnimationWrapper>
          </Flex>
          <Box size={200} bg="blue.500" />
          <Box size={200} bg="green.500" />
        </Transition>
      </Flex>
    </ThemeProvider>
  );
};

//   // return (
//   //   <Flex bg="red" b="2px solid red" h={1000} center>
//   //     <TransitionGroup component={null}>
//   //       {list.map((item, i) => (
//   //         <Animation
//   //           in
//   //           appear
//   //           key={item}
//   //           duration={500}
//   //           onEntering={{
//   //             translateX: [-250, 0],
//   //             opacity: [0, 1],
//   //             delay: i * 100,
//   //             // loop: true,
//   //             // direction: "alternate",
//   //           }}
//   //           easing="spring(1, 80, 10, 0)"
//   //         >
//   //           <Flex bg="green" w={0.1} center mb={2}>
//   //             <Text>{item}</Text>
//   //           </Flex>
//   //         </Animation>
//   //       ))}
//   //     </TransitionGroup>
//   //   </Flex>
//   // );

//   // const App = () => {
//   //   return (
//   //     <View
//   //       w={[0.9, 0.7, 0.5]}
//   //       h={[300, 400]}
//   //       mx="auto"
//   //       mt={[5, 6, 7]}
//   //       b="2px solid red"
//   //       alignItems="center"
//   //       justifyContent="center"
//   //       boxShadow="inset 1px 1px 12px 6px rgba(0, 0, 0, 0.4)"
//   //       bgImage={[
//   //         "https://i.pinimg.com/originals/38/f6/60/38f660ef385e3b0f20bb2b3e17f5c72b.jpg",
//   //         "https://dzone.com/storage/temp/12846157-triangular-pattern.png",
//   //       ]}
//   //       bgRepeat="no-repeat"
//   //       bgSize="cover"
//   //       bgPosition="center center"
//   //       variant="primary"
//   //     >
//   //       <View
//   //         size={[150, 200]}
//   //         r={0.5}
//   //         b="2px solid blue"
//   //         alignItems="center"
//   //         justifyContent="center"
//   //         fs={7}
//   //         bold={[false, true]}
//   //         italic={[false, true]}
//   //         bg="orange"
//   //         opacity="0.8"
//   //         textShadow="0 0 15px rgba(0, 255, 0, 0.8)"
//   //         boxShadow="1px 1px 8px 6px rgba(0, 0, 0, 0.4)"
//   //         variant="secondary"
//   //       >
//   //         UTK
//   //       </View>
//   //     </View>
//   //   );
// };

export default App;
