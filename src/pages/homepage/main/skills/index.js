import React, { forwardRef } from "react";
import { Box, Text, HStack, VStack, Grid, Flex, color } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import { Body, Heading2 } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Skills = forwardRef(({ ...props }, ref) => {
  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props}>
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>skills</Heading2>
        </SectionHeader>
      </Box>
      <Text
        pb="1em"
        fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
        textAlign="center"
      >
        Technologies & tools I work with:
      </Text>
      <Grid
        mx="auto"
        py="5em"
        w={{ base: "100%", lg: "90%" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{ base: 8 }}
        placeItems="center"
      >
        <Languages />
        <Frameworks />
        <Tools />
      </Grid>
    </Box>
  );
});

const SkillBox = ({ children, name, bg }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <Flex
      align="center"
      justify="center"
      width={{ base: "250px" }}
      height="60px"
      border="1px solid #DDDDDD"
      borderRadius="18px"
      spacing={4}
      padding="12px 36px"
      alignItems="center"
      justifyContent="flex-start"
      _hover={{
        backgroundColor: bg,
        transform: "translateY(-8px)",
        color: "#FFFFFF",
      }}
      transition="all ease .5s"
      cursor="pointer"
    >
      <Box
        backgroundColor={bg}
        padding="4px"
        borderRadius="12px"
        marginRight="16px"
        transition="all ease .5s"
      >
        {children}
      </Box>
      <Box fontWeight="medium">{name}</Box>
    </Flex>
  );
};

const Languages = () => {
  return (
    <>
      <SkillBox name="HTML5" bg="#FF6D00">
        <img src="https://img.icons8.com/ios/32/FFFFFF/html-5--v1.png" />
      </SkillBox>
      <SkillBox name="CSS3" bg="#039BE5">
        <img src="https://img.icons8.com/ios/32/FFFFFF/css3.png" />
      </SkillBox>
      <SkillBox name="JavaScript" bg="#FFD600">
        <img src="https://img.icons8.com/ios/32/FFFFFF/javascript--v1.png" />
      </SkillBox>
      <SkillBox name="TypeScript" bg="#3178c6">
        <img src="https://img.icons8.com/ios/32/FFFFFF/typescript.png" />
      </SkillBox>
    </>
  );
};

const Frameworks = () => {
  return (
    <>
      <SkillBox name="React.js" bg="#61dafb">
        <img src="https://img.icons8.com/ios/32/FFFFFF/react-native--v1.png" />
      </SkillBox>
      <SkillBox name="Node.js" bg="#417e38">
        <img src="https://img.icons8.com/windows/32/FFFFFF/node-js.png" />
      </SkillBox>
      <SkillBox name="Next.js" bg="#636363">
        <img src="https://img.icons8.com/ios/32/FFFFFF/circled-chevron-right.png" />
      </SkillBox>
      <SkillBox name="Golang" bg="#61dafb">
        <img src="https://img.icons8.com/ios/32/FFFFFF/golang.png" />
      </SkillBox>
      <SkillBox name="Python" bg="#FFC107">
        <img src="https://img.icons8.com/ios/32/FFFFFF/python--v1.png" />
      </SkillBox>
      <SkillBox name="Firebase" bg="#f57c00">
        <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/32/FFFFFF/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-regular-tal-revivo.png" />
      </SkillBox>
    </>
  );
};

const Tools = () => {
  return (
    <>
      <SkillBox name="Redux" bg="#6a43a9">
        <img src="https://img.icons8.com/ios/32/FFFFFF/redux.png" />
      </SkillBox>
      <SkillBox name="Git" bg="#F4511E">
        <img src="https://img.icons8.com/ios/32/FFFFFF/git.png" />
      </SkillBox>
      <SkillBox name="Github" bg="#003f8c">
        <img src="https://img.icons8.com/ios-glyphs/32/FFFFFF/github.png" />
      </SkillBox>
      <SkillBox name="Figma" bg="#5551ff">
        <img src="https://img.icons8.com/ios-glyphs/32/FFFFFF/figma.png" />
      </SkillBox>
      <SkillBox name="Postman" bg="#ff6c37">
        <img src="https://img.icons8.com/wired/32/FFFFFF/postman-api.png" />
      </SkillBox>
      <SkillBox name="Vscode" bg="#0066b8">
        <img src="https://img.icons8.com/ios/32/FFFFFF/visual-studio.png" />
      </SkillBox>
    </>
  );
};

const SkillBoxWrapper = ({ children }) => {
  return <HStack spacing={{ base: 8, md: 16, lg: 32 }}>{children}</HStack>;
};

export default Skills;
