import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import SpherePulse from "../../../../assets/motion/SpherePulse";
import { Line, SectionHeader } from "../../../../components/layout";
import { Body, Heading2, Heading3 } from "../../../../components/typography";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader
          heading={<Heading2>about</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
      </Box>
      <Stack
        align="center"
        spacing={16}
        direction={{ base: "column-reverse", xl: "row" }}
        justify={{ base: "space-between", xl: "space-evenly" }}
      >
        <Box
          bg={lightGreyBg}
          rounded="full"
          display="grid"
          placeItems="center"
          p={{ base: "8px", md: "16px" }}
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p="8px" w={{ base: "100%", xl: "50%" }}>
          <Body mb="2em">
            Hello! I'm Greg, a junior front-end developer based in Bedford, UK.
            I love to work on exciting projects that test what I've learnt,
            whilst being exposed to the power and potential of the ever-evolving
            technologies around us. I'm always looking for better, and more
            importantly, ethical and accessible ways to solve the common
            problems we are faced with day-to-day.
          </Body>
          <Box>
            <Heading3>Things I've been up to recently:</Heading3>
            <Stack as="ul">
              <Bullet>Building this!</Bullet>
              <Bullet>Getting deeper into React and Nodejs</Bullet>
              <Bullet>Starting my podcast show and blogging</Bullet>
            </Stack>
          </Box>
          <Box>
            <Stack as="ul">
              <Heading3>I'm hoping to:</Heading3>
              <Bullet>Build more features for this site</Bullet>
              <Bullet>Learn WebGL (three.js), GraphQL and Typescript</Bullet>
              <Bullet>Make some meaningful contributions to open source</Bullet>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});

const Bullet = ({ children }) => {
  return (
    <Stack spacing={3} direction="row" as="li">
      <Box>
        <SpherePulse
          position="relative"
          top={{ base: "6px", md: "7px", lg: "8px" }}
        />
      </Box>
      <Body>{children}</Body>
    </Stack>
  );
};

export default About;
