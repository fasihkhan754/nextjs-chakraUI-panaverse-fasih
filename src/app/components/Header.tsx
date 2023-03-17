"use client";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure
  } from '@chakra-ui/react'
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Button,
  MenuButton,
  Menu,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react/dist/chakra-provider";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Box boxShadow={"lg"} bg='#FFF5F5'>
        <Container maxW="1600">
          <SimpleGrid templateColumns={{lg:"repeat(3,1fr)",base:"repeat(2,1fr)"}}>
            <Box>
              <Image
                src="/panalogo.png"
                alt="panaverse "
                width={120}
                height={120}
              />
            </Box>
            <Flex
              display={{ lg: "Flex", base: "none" }}
              placeItems={"center"}
              gap={12}
              fontWeight="semibold"
              fontSize={18}
              color="black"
            >
              <Link href={"/"}>
                <Box _hover={{ background: "#FED7D7" }} padding={"20px"}>
                  Home
                </Box>
              </Link>
              <Link href={"/syllabus"}><Box _hover={{ background: "#FED7D7" }} padding={"20px"}>
                  Syllabus
                </Box></Link>
              <Link href={"/explore"}><Box _hover={{ background: "#FED7D7" }} padding={"20px"}>
                  Explore
                </Box></Link>
              <Link href={"/contact"}><Box _hover={{ background: "#FED7D7" }} padding={"20px"}>
                  Contact
                </Box></Link>
              <Link href={"/about"}><Box _hover={{ background: "#FED7D7" }} padding={"20px"}>
                  About
                </Box></Link>
            </Flex>
            <Box display={{ lg: "initial", base: "none" }}>
              <Button mt={"10px"} size={"lg"} colorScheme="red" float={"right"}>
                Apply
              </Button>
            </Box>
            <Box pt='15px' pb='14px' display={{ base: "initial", lg: "none" }}>
            <Button colorScheme='red' onClick={onOpen} float={'right'}>
            <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={'#702459'}>Fasih's Chakra </DrawerHeader>

          <DrawerBody>
          <Box ml={0}>
                <Link href={"/"}>
                  <Box _hover={{ background: "#FFF5F7" }} padding={"20px"}>Home</Box></Link>
                  <Link href={"/syllabus"}>
                  <Box _hover={{ background: "#FFF5F7" }} padding={"20px"}>Syllabus</Box></Link>
                  <Link href={"/explore"}>
                  <Box _hover={{ background: "#FFF5F7" }} padding={"20px"}>Explore</Box></Link>
                  <Link href={"/contact"}>
                  <Box _hover={{ background: "#FFF5F7" }} padding={"20px"}>Contact</Box></Link>
                  <Link href={"/about"}>
                  <Box _hover={{ background: "#FFF5F7" }} padding={"20px"}>About</Box></Link>
                  
                </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
