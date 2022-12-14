import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import SpherePulse from "../../../../assets/motion/SpherePulse";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  Body,
  Bullet,
  Heading2,
  Heading3,
} from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");
  const { secondary } = useColorSwitcher();

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>sobre</Heading2>
        </SectionHeader>
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
          <Body mb="1.5em">
            Olá, sou o Taciano, um desenvolvedor full-stack júnior. Adoro
            trabalhar em projetos empolgantes que testam o que aprendi, ao mesmo
            tempo em que sou exposto ao poder e ao potencial das tecnologias em
            constante evolução ao nosso redor. Estou sempre procurando maneiras
            melhores e, mais importante, éticas e acessíveis de resolver os
            problemas comuns que encontramos no dia a dia.
          </Body>
          <Box>
            <Heading3>O que eu tenho feito:</Heading3>
            <Stack as="ul">
              <Bullet as="li">Construindo isso!</Bullet>
              <Bullet as="li">Cursando ciência da computação</Bullet>
              <Bullet as="li">Iniciando em UX Design</Bullet>
              <Bullet as="li">
                Aprofundando-se{" "}
                <Link color={secondary} textDecor="underline" href="">
                  React
                </Link>{" "}
                and{" "}
                <Link color={secondary} textDecor="underline" href="">
                  Nodejs
                </Link>
              </Bullet>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
