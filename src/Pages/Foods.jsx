import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { SignUpNavbar } from "./SignUpNavbar";
import { MdCheckCircle } from "react-icons/md";
import {MdSettings } from "react-icons/md";
import { Footer } from "./Footer";
import {Box,Grid,Button,HStack, Container,List,
  ListItem,
  ListIcon,
   GridItem, Image, Text, VStack, Heading, Divider, Flex} from "@chakra-ui/react"

export const Foods =() => {
    const [data,setData] =useState([])

    const navigate = useNavigate();
    function handleClick() {
        navigate('/home')
    }

    useEffect(()=> {
        axios.get("http://localhost:8080/food")
        .then(res => setData(res.data))
    },[])
   

// url:http://localhost:8080/food
    return (
        <>
        <SignUpNavbar/>

        <Box bgColor='gray.200' h='30px'>
          <Flex w='82%' justifyContent='flex-end' fontSize={'15px'} color="green">
        <button onClick={handleClick} >        
          Go Back to Home</button>
        </Flex>
        </Box>
       
      



             <Grid  maxW={{ base: "full", md: "full" }} templateColumns="repeat(2,1fr)" gap={100}
              p={{ base: 2, lg: 0 }}
               ml="30px"
                // border="1px solid red"
                >
      <Grid ml="30px" mt="30px"  w="800px" templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={6}>
        {data.map((food) => (
          <GridItem key={food.id}>
            <VStack>
              <Box>
                <HStack>
                <Image boxSize="100px" src={food.img} alt="prdimg"></Image>
                <Text fontSize={'15px'}>{food.info}</Text>
                </HStack>
              </Box>
            
              <Box>
                
              </Box>
            </VStack>
          </GridItem>
        ))}
      </Grid>


      <Grid 
      // border="1px solid teal"
       w='350px'   >
        <VStack 
        // border="1px solid black"
         bgColor={'gray.200'} h='500' mt='30px'>
          <Heading fontSize={'20px'} color='gray' ml='-20px'>Member Meals</Heading>
          <Divider ></Divider>
          <Box textAlign={'left'}>
            <Box>
          <List spacing={3}>
            <ListItem>
              <ListItem  mb='10px' color="gray.900" fontWeight={'bold'}>
                <ListIcon as={MdSettings} color='green.500' />
                Breakfast:
                </ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Bacon & eggs
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Banana Sandwitch
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Egg Beaters Omelet
                    </ListItem>
                    </List>
                    </Box>
                    <Box>
                      <List spacing={3}>
                        <ListItem>
                          <ListItem  color="gray.900" fontWeight={'bold'}  mt='20px' mb='10px'>
                            <ListIcon as={MdSettings} color='green.500' />
                            Lunch:
                            </ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Brie with Mustard
                            </ListItem>
                            <ListItem>
                              <ListIcon as={MdCheckCircle} color='green.500' />
                              Broccoli & Cheese Baked Potato
                              </ListItem>
                              <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                Blue Cheese Salad
                                </ListItem>
                                </List>
                                </Box>

                                <Box>
                      <List spacing={3}>
                        <ListItem>
                          <ListItem  color="gray.900" fontWeight={'bold'}  mt='20px' mb='10px'>
                            <ListIcon as={MdSettings} color='green.500' />
                            Dinner:
                            </ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Brie with Mustard
                            </ListItem>
                            <ListItem>
                              <ListIcon as={MdCheckCircle} color='green.500' />
                              Broccoli & Cheese Baked Potato
                              </ListItem>
                              <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                Blue Cheese Salad
                                </ListItem>
                                </List>
                                </Box>
          
           
            
          </Box>

        </VStack>
        <VStack 
        // border="1px solid black"
         h='200px' bgColor={'gray.200'}>
        <List spacing={3}>
                        <ListItem>
                          <ListItem  color="gray.900" fontWeight={'bold'}  mt='20px' mb='10px'>
                            <ListIcon as={MdSettings} color='green.500' />
                            Recently Popular Foods
                            </ListItem>
                            <Text fontSize={'10px'} textAlign='left'>
                            Magnum Classic Mini<br/>
                            Pictsweet Parmesan Cauliflower<br/>
                            Good & Gather Whole Milk<br/>
                            Good & Gather Beef Snack Bites<br/>
                            Super Coffee Hazelnut Latte<br/>
                            Kaizen Low Carb High Protein Pasta<br/>
                            Twizzlers Orange Cream Pop<br/>
                            Isagenix Recharge NAD<br/>
                            </Text>
                            </ListItem>
                            </List>
                            </VStack>
      </Grid>
    </Grid>


        <Footer/>
        </>

       
    )
}