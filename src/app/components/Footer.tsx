import { Grid,Image } from "@chakra-ui/react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react/dist/chakra-provider";
//import Image from "next/image";
import Link from "next/link";
import png from "../../../public/panalogo.png";

export default function Footer() {
  return (
    <Box bg="black">
      <Container maxW="1600">
        <SimpleGrid textAlign={{lg:"start",base:"center"}} spacingY="20px" py="40px" templateColumns={{lg:"repeat(4,1fr)",base:"repeat(1,1fr)"}}>
          <Box>
            <Heading  pb="10px" color={"white"}>
              About Us
            </Heading>
            <Image m={{lg:"",base:"auto"}} src={'/panalogo.png'} alt="panaverse" width={100}></Image>
            <Text pt="10px" pr={{lg:"60px",base:"0"}} color={"gray"}>
              Web3 and metaverse technologies expand the internet as we know it
              by introducing novel features and advancements.
            </Text>
          </Box>
          <Box>
            <Heading color={"white"}>Useful Links</Heading>
            <Grid pt="40px" color={"gray"} gap={2} >
              
              <Link href={"/"}><Box _hover={{ color: "white" }}>Home</Box></Link>
              <Link href={"/syllabus"}><Text _hover={{ color: "white" }}>Syllabus</Text></Link>
              <Link href={"/explore"}><Text _hover={{ color: "white" }}>Explore</Text></Link>
              <Link href={"/contact"}><Text _hover={{ color: "white" }}>Contact</Text></Link>
               <Link href={"/about"}><Text _hover={{ color: "white" }}>About</Text></Link>
            </Grid>
          </Box>

          <Box>
            <Heading color={"white"}>Follow us on</Heading>
            <Grid pt="40px" color={"gray"} gap={2}>
              <Link href={""}>Instagram</Link>
              <Link href={""}>Facebook</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>GitHub</Link>
              <Link href={""}>LinkedIn</Link>
            </Grid>
          </Box>
          <Box>
            <Heading color={"white"}>Contact Us</Heading>
            <Grid pt="40px" color={"gray"} gap={2}>
              <Link href={""} type="email">
                03343535626
              </Link>
              <Link href={""}>fasihkhan754@gmail.com</Link>
              <Link href={""}>lahore</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
