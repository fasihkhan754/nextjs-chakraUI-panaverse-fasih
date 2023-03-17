import { Box, Button, Container, Flex, Heading,Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import png from "./../../../public/meta2.png";
import png2 from "./../../../public/meta1.jpg";
import { RevealWrapper } from 'next-reveal';


export default function Banner() {
  return (
    <>
    <Box bgImage={'/metabg.jpg'}>
        <Container maxW='1600'>
            <Flex pt={{lg:'110px',base:"30px"}} pb='100px' px={{lg:'40px',base:"5px"}} display={{lg:'flex',base:"grid"}}>
                <Box flexBasis={{lg:'55%',base:'%'}} px={{lg:'40px',base:"0"}}>
                    <Heading color={'White'} size='2xl'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Heading>
                    <Text color={'silver'} pt={'10px'}>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</Text>
                    <Button mt={'10px'} size='lg' colorScheme={'red'}>
                        Get Started
                    </Button>
                </Box>
                <Box float={'right'} mt={{lg:'-110px',base:'-30px'}} flexBasis={{lg:'45%',base:'%'}}>
                <RevealWrapper origin='left' delay={300} duration={1000} distance='1500px' reset={true}>
                    <Image src={png} alt="hi" width={'600'} height={'200'}/>
                    </RevealWrapper>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
    <Container maxW='1600'>
            <Flex gap={{lg:'100px',base:"10px"}} display={{lg:'flex',base:"grid"}} >
            <Box flexBasis={'50%'}>
                    <Image src={png2} alt="hi" width={'600'} height={'200'}/>
                </Box>
                <Box flexBasis={'50%'} pt={{lg:'80px',base:"10px"}}>
                    <Heading size='2xl'>Certified Web 3.0 and Metaverse Developement</Heading>
                    <Text pr='50px' pt={'10px'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                    <Button mt={'10px'} size='lg' colorScheme={'red'}>
                        Learn More
                    </Button>
                </Box>
               
            </Flex>
        </Container>
    </Box>
    </>
  )
}
