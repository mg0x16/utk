import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
import { MdBrokenImage } from "react-icons/md";

import { makeComponent } from "../cssinjs-system";

import Flex from "./Layout/Flex";
import Icon from "./Typography/Icon";

const SimpleImage = makeComponent("img")(["image"]);

const NestedImage = makeComponent("img")([
  {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  "image",
]);

const Image = ({
  src,
  objectFit,
  cover,
  contain,
  fill,
  simple = true,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (simple) {
    return (
      <SimpleImage
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
      center={loading || error}
      bg={error ? "blackAlpha.100" : "inherit"}
      {...rest}
    >
      {loading ? (
        <Icon spin fs="2rem" icon={AiOutlineLoading} />
      ) : error ? (
        <Icon fs="5rem" c="#666" icon={MdBrokenImage} />
      ) : null}

      <NestedImage
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
