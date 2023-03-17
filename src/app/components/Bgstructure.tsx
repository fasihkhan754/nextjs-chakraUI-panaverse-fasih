import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import about from "../../../public/aboutus.jpg";

export default function Bgstructure(hello: any) {
  return (
    <Box bgImage={hello.src} py="220px" bgAttachment={"fixed"} bgSize="cover">
      <Container maxW={1300}>
        <Heading color={"black"} size="3xl">
          {hello.title}
        </Heading>
      </Container>
    </Box>
  );
}
