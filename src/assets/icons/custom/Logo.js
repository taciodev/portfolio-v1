import { createIcon, defaultProps, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Children } from "react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";

const groupVariants = {
  hidden: {
    fillOpacity: -25,
  },
  visible: {
    fillOpacity: 1,

    transition: {
      // delay: 0.5,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LogoBase = createIcon({
  defaultProps,
  displayName: "LogoBase",
  viewBox: "0 0 140 191",
  path: (
    <motion.g variants={groupVariants} initial="hidden" animate="visible">
      <motion.path //
        d="M58.8 17.6H56.4C44.5333 17.6 35.2667 20.6 28.6 26.6C22.0667 32.4667 18.8 42.9333 18.8 58C18.8 62.9333 19.2667 66.4 20.2 68.4C21.1333 70.2667 21.6 71.3333 21.6 71.6C14.4 71.6 9 70.1333 5.4 67.2C1.93333 64.1333 0.2 59.1333 0.2 52.2C0.2 42.7333 2.53333 34.1333 7.2 26.4C11.8667 18.5333 19.2667 12.2 29.4 7.39999C39.6667 2.59999 52.6667 0.199997 68.4 0.199997C77.2 0.199997 86.6667 0.999995 96.8 2.59999C105.333 4.06666 112.933 4.8 119.6 4.8C128.133 4.8 135.867 3.4 142.8 0.599992C142.533 9.26666 140.333 15.6667 136.2 19.8C132.067 23.9333 125.933 26 117.8 26C113.533 26 109.267 25.6667 105 25C100.733 24.3333 94.6667 23.2 86.8 21.6L59.2 150H30.4L58.8 17.6Z"
        variants={pathVariants}
      />
    </motion.g>
  ),
});

const Logo = ({ boxSize = "64px", ...props }) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return <Icon {...props} fill={colorDark} boxSize={boxSize} as={LogoBase} />;
};

export default Logo;
