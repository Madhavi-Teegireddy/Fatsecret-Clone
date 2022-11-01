import React from "react";
import {Box,Flex,Link,HStack,Image,Input,Stack,Grid,GridItem
} from "@chakra-ui/react";



export const SignUpNavbar =() => {
    return (
        <>
        
        <Box bg='green' w='100%' color='white' h='30px'></Box>
        <Box bg='gray.200' h='100px'>
        <Flex justifyContent='space-around'>
      
      <HStack color="whiteAlpha.700" mt='20px' >
        <Link color="black" href="#">
            <Image src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png"/>
        </Link>
      </HStack>
      <Stack mt='40px'>
        <Input variant='filled' placeholder='Enter Search' />
        </Stack>
        </Flex>
        </Box>
        <Grid templateColumns='repeat(8, 1fr)' gap={0} fontSize='12'>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray' />
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>MY FATSECRET</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>FOODS</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>RECIPES</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>CHALLENGES</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>FITNES</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray'>COMMUNITY</GridItem>
            <GridItem w='100%' h='5' bg='gray.200' border='1px solid gray' />
            </Grid>
        </>
    )
}