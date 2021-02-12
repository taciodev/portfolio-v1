import React, { useState } from "react";
import { Link, List, ListItem, Text } from "@chakra-ui/react";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";
import { Link as ScrollLink } from "react-scroll";

// const WrappedLink = ({ children, ...props }) => {
//   <Link {...props}>{children}</Link>;
// };

// const NavLink = ScrollLink(WrappedLink);

const NavMenuItem = ({ handleClick, children }) => {
  const { brandColor } = useColorSwitcher();

  const isRef = () => {
    if (children === "about") {
      return 1000;
    }
    if (children === "skills") {
      return 1250;
    }
    if (children === "projects") {
      return 1500;
    }
    if (children === "contact") {
      return 2000;
    }
  };

  return (
    <ListItem
      _hover={{ color: brandColor, fontWeight: "bold" }}
      transitionDuration="450ms"
      cursor="pointer"
      mx="16px"
    >
      <ScrollLink
        to={children}
        onClick={() => handleClick(children)}
        smooth={true}
        duration={isRef}
        delay={100}
      >
        {children}
      </ScrollLink>
    </ListItem>
  );
};

const NavMenu = ({
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  ...props
}) => {
  const handleClick = (child) => {
    if (child === "about") {
      aboutRef.current.focus({ preventScroll: true });
    }
    if (child === "skills") {
      skillsRef.current.focus({ preventScroll: true });
    }
    if (child === "projects") {
      projectsRef.current.focus({ preventScroll: true });
    }
    if (child === "contact") {
      contactRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <List
      {...props}
      display={{ base: "none", lg: "flex" }}
      justifyContent="space-between"
      w="15%"
    >
      <NavMenuItem handleClick={handleClick}>about</NavMenuItem>
      <NavMenuItem handleClick={handleClick}>skills</NavMenuItem>
      <NavMenuItem handleClick={handleClick}>projects</NavMenuItem>
      <NavMenuItem handleClick={handleClick}>contact</NavMenuItem>
    </List>
  );
};

export default NavMenu;
