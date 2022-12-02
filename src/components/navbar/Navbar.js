import React from "react";
import { Flex, useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { Logo } from "../../assets/icons";
import NavMenu from "./NavMenu";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorLight, colorDark } = useColorSwitcher();

  const light = colorMode === "light";

  const ThemeIcon = () => (
    <Icon w="28px" h="28px" as={colorMode === "light" ? FaMoon : MdWbSunny} />
  );

  return (
    <Flex
      m="auto"
      p=".5em"
      w={{ base: "100%", md: "90%", lg: "80%" }}
      my="3"
      justify="space-between"
      alignItems="center"
      align="center"
      direction="row"
      position="relative"
    >
      <NavMenu
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Icon
        order={{ lg: -1 }}
        stroke={colorDark}
        strokeWidth="2px"
        paddingTop="6px"
        w="42px"
        h="42px"
        as={Logo}
      />

      <IconButton
        aria-label={`Toggle ${light ? "dark" : "light"} mode`}
        w="64px"
        h="64px"
        onClick={toggleColorMode}
        colorScheme={colorLight}
        color={colorDark}
        icon={<ThemeIcon />}
      />
    </Flex>
  );
};

export default Navbar;
