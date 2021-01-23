import React, { useRef, useEffect, useState } from "react";

import { makeStyles, makeComponent } from "./styles";
import { useTheme } from "./theme";

import {
  FaSearch,
  FaSpinner,
  FaStarAndCrescent,
  FaMicrochip,
} from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

// import { TransitionGroup } from "react-transition-group";
import {
  Flex,
  Text,
  Title,
  Image,
  Icon,
  Fade,
  Button,
  Animation,
  Link,
  Paragraph,
  Input,
  Select,
  Label,
  TextArea,
  Radio,
  CheckBox,
  Slider,
  Switch,
} from "./components";

import color from "./systems/color";

// const useStyles = makeStyles(theme => ({
//   root: {
//     // color: "primary",
//     color: theme.palette.primary,
//   },
//   sub: {
//     color: theme.palette.error,
//   },
// }));

// const Text = makeComponent("p")([color]);

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(testRef);
  //   }, 1000);
  // }, []);

  // const theme = useTheme();
  // const classes = useStyles();
  // console.log("Classes: ", classes);
  // console.log("Theme: ", theme);

  const [c, setC] = useState(true);

  const list = ["First", "Second", "Third", "Fourth", "Fifth"];

  return (
    <Flex w={1} b="2px solid red" center>
      <Title>UTK Presernts:</Title>
      <Title>This is title 1</Title>
      <Title as="h2">This is title 2</Title>
      <Title as="h3">This is title 3</Title>
      <Title as="h4">This is title 4</Title>
      <Title as="h5">This is title 5</Title>
      <Title c="primary" as="h6">
        This is title 6
      </Title>
      <hr style={{ width: "100%" }} />
      <Label htmlFor="myinput">Typoe me</Label>
      <Input name="myinput" id="myinput" placeholder="kill me" />
      <Select
        w={300}
        options={[{ label: "Four" }, { label: "Five" }, { label: "Six" }]}
      />
      <TextArea value="This is some text" />
      <Radio label="red" name="color" id="red" value="red" />
      <Radio label="green" name="color" id="green" value="green" />
      <Radio label="blue" name="color" id="blue" value="blue" />

      <CheckBox label="red" name="color" id="red" value="red" />
      <CheckBox label="green" name="color" id="green" value="green" />
      <CheckBox label="blue" name="color" id="blue" value="blue" />
      <Switch />
      <Slider
        label="value"
        w={600}
        id="percent"
        name="percent"
        defaultValue={25}
      />
      <Text>This is a text</Text>
      <Text strong>This is a text</Text>
      <Text underline>This is a text</Text>
      <Text delete>This is delete text</Text>
      <Text code>This is code text</Text>
      <Text keyboard>This is keyboard text</Text>
      <Text mark>This is mark text</Text>
      <Flex row>
        <Button bg="primary" mr={2}>
          Primary
        </Button>
        <Button bg="secondary" mr={2}>
          Secondary
        </Button>
      </Flex>
      <Link href="#">Click ME</Link>
      <Button
        text="Click Me Please"
        icon={<Icon icon={FaSearch} />}
        onClick={() => {
          alert("clicked");
        }}
        my={2}
        bg={"error"}
      />
      <Button
        variant="fab"
        my={2}
        icon={<Icon icon={FaSearch} />}
        onClick={() => {
          alert("clicked");
        }}
        // bg={"#f44336"}
      />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in leo at
        nisl aliquam molestie. Donec purus ipsum, feugiat ut posuere a, aliquam
        at est. Phasellus sagittis urna eu velit posuere, sed mattis ante
        fringilla. In dignissim venenatis arcu, vel accumsan libero venenatis
        et. Phasellus luctus lacus in justo lacinia, ac ornare urna placerat.
        Donec at ornare tortor, quis accumsan ex. Aliquam erat volutpat. Morbi
        viverra blandit lacus sed iaculis. Vestibulum vehicula lobortis tellus.
        Aliquam accumsan massa nec laoreet dignissim. Etiam dictum turpis sed
        lacus faucibus, suscipit egestas ipsum volutpat. Ut a ultrices lorem.
        Nam non commodo erat, a malesuada erat. Ut porttitor ex at enim
        placerat, non sollicitudin mauris sodales.
      </Paragraph>
    </Flex>
  );

  // return (
  //   <Flex bg="red" b="2px solid red" h={1000} center>
  //     <TransitionGroup component={null}>
  //       {list.map((item, i) => (
  //         <Animation
  //           in
  //           appear
  //           key={item}
  //           duration={500}
  //           onEntering={{
  //             translateX: [-250, 0],
  //             opacity: [0, 1],
  //             delay: i * 100,
  //             // loop: true,
  //             // direction: "alternate",
  //           }}
  //           easing="spring(1, 80, 10, 0)"
  //         >
  //           <Flex bg="green" w={0.1} center mb={2}>
  //             <Text>{item}</Text>
  //           </Flex>
  //         </Animation>
  //       ))}
  //     </TransitionGroup>
  //   </Flex>
  // );

  // return (
  //   <Flex bg="red" b="2px solid red" h={1000} center>
  //     <button
  //       style={{
  //         position: "absolute",
  //         top: "100px",
  //         left: "100px",
  //       }}
  //       onClick={() => {
  //         setC(!c);
  //       }}
  //     >
  //       Click me
  //     </button>
  //     <Animation
  //       in={c}
  //       appear
  //       onEntering={{ translateX: [-250, 0], opacity: [0, 1] }}
  //       onExiting={{ translateY: 250, opacity: 0 }}
  //       onEntered={{ translateX: 0, opacity: 1 }}
  //       onExited={{ translateY: 0, opacity: 0 }}
  //       unmountOnExit={false}
  //     >
  //       <Flex bg="green" w={0.1} center mb={5}>
  //         <Text>Fuck</Text>
  //         <Text>Fuck</Text>
  //         <Text>Fuck</Text>
  //         <Text>Fuck</Text>
  //       </Flex>
  //     </Animation>
  //   </Flex>
  // );
  // };

  // const App = () => {
  //   return (
  //     <View
  //       w={[0.9, 0.7, 0.5]}
  //       h={[300, 400]}
  //       mx="auto"
  //       mt={[5, 6, 7]}
  //       b="2px solid red"
  //       alignItems="center"
  //       justifyContent="center"
  //       boxShadow="inset 1px 1px 12px 6px rgba(0, 0, 0, 0.4)"
  //       bgImage={[
  //         "https://i.pinimg.com/originals/38/f6/60/38f660ef385e3b0f20bb2b3e17f5c72b.jpg",
  //         "https://dzone.com/storage/temp/12846157-triangular-pattern.png",
  //       ]}
  //       bgRepeat="no-repeat"
  //       bgSize="cover"
  //       bgPosition="center center"
  //       variant="primary"
  //     >
  //       <View
  //         size={[150, 200]}
  //         r={0.5}
  //         b="2px solid blue"
  //         alignItems="center"
  //         justifyContent="center"
  //         fs={7}
  //         bold={[false, true]}
  //         italic={[false, true]}
  //         bg="orange"
  //         opacity="0.8"
  //         textShadow="0 0 15px rgba(0, 255, 0, 0.8)"
  //         boxShadow="1px 1px 8px 6px rgba(0, 0, 0, 0.4)"
  //         variant="secondary"
  //       >
  //         UTK
  //       </View>
  //     </View>
  //   );
};

export default App;
