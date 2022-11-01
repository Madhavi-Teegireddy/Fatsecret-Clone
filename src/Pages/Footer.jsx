import React from "react";
import {Box,Icon,HStack,Text,VStack
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
// import { GiUsaFlag } from "react-icons/gi";






export const Footer = () => {
    return (
        <>
        <Box h='200' bgColor={'black'}>
            <Box>
            <Icon mt='50' color='white' width='50px' height='30px' as={FaFacebook} ml="10px" h={5} w={5} />
            <Icon color='white' width='50px' height='30px' as={SiInstagram} ml="10px" h={5} w={5} />
            <Icon color='white' width='50px' height='30px'   as={BsTwitter} ml="10px" h={5} w={5} />
            </Box>
            <HStack margin='auto' w='40%' color='white'  mt='6' justifyContent={'space-between'}>
                <Text>FOOD LIST</Text>
                <Text>BRAND LIST</Text>
                <Text>PLATFORM</Text>
                <Text>PROFESSIONAL</Text>
                <Text>Contact</Text>
            </HStack>

            <HStack margin='auto' w='30%' color='gray' fontSize={'13'} mt='5' justifyContent={'space-between'}>
                <Text>FIND PEOPLE |</Text>
                <Text>FAQ |</Text>
                <Text> BLOG |</Text>
                <Text>TERMS |</Text>
                <Text>PRIVACY |</Text>
                <Text>REPORT ABUSE</Text>
            </HStack>
        </Box>

        <Box h='100' bgColor={'green'}>
            <HStack>
            <Text mt='25px' ml='550px' color='white'>© 2022 FatSecret. All rights reserved.</Text>x
            </HStack>
        </Box>

        <Box bgColor={'white'} h='30px'></Box>
        </>
    )
} 