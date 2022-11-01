

import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Button,HStack, Link, Icon ,Stack,VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {Footer} from "./Footer";
import { GiUsaFlag } from "react-icons/gi";


export const Home = () => {

  const navigate = useNavigate();
  function handleClick() {
      navigate('/priv')
  }

  const navigateSign = useNavigate();
  function handleClickSign() {
      navigateSign ('/login')
  }
 


  return (
    
    <Box  w="full" h='700px'  backgroundImage="https://static.fatsecret.com/static/images/splash/Sunrise_BG_01.jpg"
    backgroundRepeat="no-repeat">
      <Flex
    px="200px"
    py="20px"
    width="full"
    color="white"
    alignItems="flex-end"
    justifyContent="space-between"
  >
    <Flex alignItems="flex-end">
      
      <HStack color="whiteAlpha.700" spacing="40px">
        <Link color="white" href="#">FOODS</Link>
        <Link color="white" href="#">RECIPES </Link>
        <Link color="white" href="#">FITNESS</Link>
        <Link color="white" href="#">COMMUNITY</Link>
      </HStack>
    </Flex>
    <Link color="whiteAlpha.800">
      UNITED STATES
      <Icon color="red" as={GiUsaFlag} ml="10px" h={5} w={5} />
    </Link>
  </Flex>




      <Flex 
      // justifyContent="space-between" alignItems="center"
      // pb="800px"
      >
        <Heading fontSize={38} mt={20} color="white">
          <Text ml='-70px'>Your Key to Success</Text>
        
        <Text>
        <Image ml='200px' mt='20px' w="380px" h="80px" 
        src="https://a.ftscrt.com/static/images/splash/FS_Logo_SplashScreen.png"/> 
        </Text>
       
        <Stack spacing={4} mt='40px' ml='200px' direction='row' align='center'>
          <Button colorScheme='green' size='lg' ><button onClick={handleClick}>Start for free</button>
            
          </Button>
          </Stack>
        <Text fontSize='15px' ml='-220px' color='gray' mt='30px'>Already a member? 
        <button onClick={handleClickSign} color="gray" href="#">
          Sign in
          </button>
        
        </Text>
        
        
        <Text textAlign='left' ml='200px' mt='60px' fontSize='20px'>Start losing weight the healthy way with easy to <br/>use apps, online tools and support.</Text>
        
        <HStack  ml='550px'>
        <Image src='https://static.fatsecret.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'/>
        <Image src='https://static.fatsecret.com/static/images/mobi/android/en_get_2.svg'/>
        </HStack>
        </Heading>
        
        </Flex>
        <Image  left='650' pos='absolute' mt='3' src="https://static.fatsecret.com/static/images/splash/Logo_Tab_Reverse_Green.png"/>
        <Box bgColor='green.500' h='200px' mt='40px'>
          <HStack><Text fontSize={45} mt='10' ml='200' color='white'>Superb 100% FREE calorie counter apps.</Text></HStack>
        <Text ml='200' color='white' fontSize={20} textAlign='left'>Over 35 million people have lost weight with FatSecret. Start your weight loss journey today and get
          <br/> access to the world's highest quality food and nutrition database.</Text>
        </Box>
        <Image left='650' pos='absolute' mt='-5' src="https://static.fatsecret.com/static/images/splash/Logo_Tab_Green.png"/>


        <Box bgColor='white' h='200px' mt='60px'>

        <Box bgColor='white' h='200px' mt='60px'>

          <HStack ml='200'>
            <Box w='300px' h='40px' ><Text fontSize={40}>Why FatSecret?</Text>
           <Text textAlign='left'>
           <li>100% free, nothing to pay</li>
           <li>Fastest, easiest <Link href='#'color='blue'>calorie counting apps</Link></li>
             <li>Supportive community</li>
             <li>Proven success</li>
             </Text>
             </Box>
             <Box w='600px' h='40px'><Text fontSize={40}>How it works!</Text>
             <Text mt='4'>People who track food achieve more than double the average weight loss and<br/>
          members lose weight 3x faster when doing it with friends. FatSecret combines<br/>
          these to create the most powerful solution for healthy, sustainable weight loss.</Text>
           </Box>
          </HStack>
          </Box>


          <Box bgColor='green.500' h='300px' mt='40px'>
          <HStack>
            <Text fontSize={45} mt='10' ml='200' color='white'>All the tools to achieve your diet goals.</Text>
          
          </HStack>
          <HStack>

          <Box  w='600px' h='40px' ml='200'>
          <Text textAlign='left' fontSize='18' mt='5'>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'>A FOOD DIARY To keep track of what you're<br/> eating.</Text>
           </Text>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'>HEALTHY RECIPES A large collection for your<br/> diet.</Text>
           </Text>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'>NUTRITIONAL INFO For all foods, brands and <br/>restaurants.</Text>
           </Text>
             </Text>
          </Box>

          <Box  w='600px' h='40px' ml='200'>
          <Text textAlign='left' fontSize='18' mt='5'>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'> AN EXERCISE DIARY To record all the<br/> calories you burn.</Text>
           </Text>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'>A WEIGHT CHART AND JOURNAL To record<br/> your progress.</Text>
           </Text>
           <Text><Image src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text mt='-10' ml='10'>MOBILE APPS For iPhone, iPad and Android.</Text>
           </Text>
             </Text>
          </Box>
          </HStack>
        </Box>



        <Box bgColor='#63B3ED'  h='430px'>
          <HStack>
            <Text fontSize={45} ml='200' color='white'>Get Connected With FatSecret</Text>
          
          </HStack>
          <HStack>

          <Box  w='600px' h='40px' ml='200'>
          <Text textAlign='left' fontSize='18' mt='5'>
          <Text fontSize='20' color='white'>The perfect application for keeping track of your food,<br/>
          exercise and weight while on-the-go</Text>

           <Text><Image mt='10' src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text  color='white' mt='-10' ml='10'>iPhone, iPod Touch and iPad</Text>
           </Text>
           <Text><Image mt='10'src="https://a.ftscrt.com/static/images/splash/Check_Tick.png"/>
           <Text color='white' mt='-10' ml='10'>Android Phones and Tablets</Text>
           </Text>
             </Text>

             <HStack mt='20'>
        <Image src='https://static.fatsecret.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'/>
        <Image src='https://static.fatsecret.com/static/images/mobi/android/en_get_2.svg'/>
        </HStack>


          </Box>

          <Box  w='600px' h='40px' ml='200'>
          <Image src="https://a.ftscrt.com/static/images/splash/img_splash_getconnected_01_1x.png"/>
          </Box>
          </HStack>
        </Box>

        <Box bgColor='black' h='200'>
        <HStack ml='200'>
            <Box ml='-70' w='400px' mt='10' h='45px' ><Text color='white' fontSize={45}>Sign Up Now!</Text>
            <Text  fontSize='25' color='white'>FatSecret is 100% FREE</Text>
             </Box>
             <Box w='400px' h='45px'>

             <Stack spacing={4} mt='40px' ml='200px' direction='row' align='center'>
          <Button colorScheme='green' size='lg'>Start for free
          </Button>
          </Stack>
        <Text fontSize='15px' ml='180' color='white' mt='30px'>Already a member? <Link  color="white" href="#">Sign in</Link>
        
        </Text>
           </Box>
          </HStack>
        </Box>

        <Box bgColor='white' h='230'>
          <VStack mt='10' >
            <Image  src="https://static.fatsecret.com/static/images/splash/FS_Logo_SplashScreen_Green.png"/>
            </VStack>

            
            <HStack mt='20' justifyContent={'center'}>
            
              
        <Image src='https://static.fatsecret.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'/>
        <Image src='https://static.fatsecret.com/static/images/mobi/android/en_get_2.svg'/>
        </HStack>


        </Box>

        <Footer/>





        </Box>
 

    </Box>

    
    
    
  );
};
