import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
import { MdBrokenImage } from "react-icons/md";

import { makeComponent } from "../styles";

import image from "../systems/image";
import layout from "../systems/layout";
import border from "../systems/border";
import space from "../systems/space";
import position from "../systems/position";
import shadow from "../systems/shadow";

import Flex from "./Flex";
import Icon from "./Icon";

const CompAlone = makeComponent("img")([
  layout,
  border,
  space,
  position,
  shadow,
  image,
]);

const CompNested = makeComponent("img")([
  {
    position: "absolute",
    width: 1,
    height: 1,
  },
  image,
]);

const Image = ({ src, objectFit, cover, contain, fill, simple, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (simple) {
    return (
      <CompAlone
        src={src}
        objectFit={objectFit}
        cover={cover}
        contain={contain}
        fill={fill}
        {...rest}
      />
    );
  }

  return (
    <Flex
      position="relative"
      overflow="hidden"
      center={loading || error}
      bg={error ? "rgba(0, 0, 0, 0.05)" : "inherit"}
      {...rest}
    >
      {loading ? (
        <Icon
          position="relative"
          zIndex="2"
          spin
          fs={5}
          icon={AiOutlineLoading}
        />
      ) : error ? (
        <Icon
          position="relative"
          zIndex="2"
          fs="6em"
          c="#666"
          icon={MdBrokenImage}
        />
      ) : null}

      <CompNested
        src={src}
        objectFit={objectFit}
        cover={cover}
        contain={contain}
        fill={fill}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </Flex>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  objectFit: PropTypes.string,
  cover: PropTypes.bool,
  contain: PropTypes.bool,
  fill: PropTypes.bool,
  simple: PropTypes.bool,
};

export default Image;
