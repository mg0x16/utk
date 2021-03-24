import React from "react";

import { HiOutlineMenu } from "react-icons/hi";

import { Flex, Text, Button } from "../../../src/components";

const Header = ({ onMenuClick }) => {
  return (
    <Flex
      bg="primary"
      row
      centerC
      between
      px="6"
      py="3"
      c="white"
      boxShadow="3x"
    >
      <Button rounded icon={HiOutlineMenu} fs="x1" onClick={onMenuClick} />
      <Text>SITE LOGO</Text>
    </Flex>
  );
};

export default Header;
