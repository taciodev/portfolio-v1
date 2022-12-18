import React, { forwardRef, useState } from "react";
import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import { PrimaryButton } from "../../../../components/button";
import { Body, Heading2, TextLarge } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Contact = forwardRef(({ ...props }, ref) => {
  const { secondary } = useColorSwitcher();

  return (
    <Box outline="0" ref={ref} tabIndex={-1} {...props} as="section">
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>contatos</Heading2>
        </SectionHeader>
      </Box>
      <Box
        mx="auto"
        w={{ base: "90%", xl: "60%" }}
        display="grid"
        placeItems="center"
      >
        <TextLarge mb="32px" align="center">
          Atualmente, estou aberto a trabalhos como freelance e procurando
          ativamente por oportunidades de trabalho em tempo integral, então, se
          você gostou do que viu, não hesite em entrar em contato!
        </TextLarge>
        <TextLarge mb="64px" align="center">
          Se você tiver alguma dúvida ou apenas quiser dizer oi, minha caixa de
          entrada está sempre aberta e tentarei responder o mais breve possível.
        </TextLarge>
        <ContactButton secondary={secondary} />
      </Box>
    </Box>
  );
});

const ContactButton = ({ secondary }) => {
  const [icon, setIcon] = useState(false);
  return (
    <PrimaryButton
      as="a"
      href="mailto:tacianohora2020@hotmail.com"
      theme={secondary}
    >
      GET IN TOUCH
    </PrimaryButton>
  );
};

export default Contact;
