import React from "react";
import { useNavigate } from "react-router-dom";
import {Box,Image,Divider,VStack,Text, HStack,Stack,Button
} from "@chakra-ui/react"

function PrivacyPolicy() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/home')
    }

    function handleSignUp()  {
        navigate('/signup')
    }


    // function handleSignUp() {
    //     navigate('/register')
    // }

    
    return (
        <>
           <Box h='1100px'>

            <Box h='980px' border='1px dashed gray' w='70%' m='auto' mt='20'>
                <Image mt='15px' ml='10' src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png"/>
                <Divider mt='5' orientation='horizontal' />
                <VStack>
                    <Image w='200' h='200' mt='10' src="https://static.fatsecret.com/static/images/splash/img_data_collection_consent_01_1x.png"/>
                </VStack>
                <VStack  h='150' fontFamily='sans-serif'>
                    <Text ml='-60' fontWeight={'bold'} fontSize={'26'}>Before you get started</Text>
                    <Text textAlign={'left'}  color='black'>FatSecret’s mission is to help you reach your nutrition goals by providing<br/>
                    you with the tools and support to get there. To enable us to do this, we<br/>
                    collect and use your data in several ways. Our privacy policy outlines the<br/>
                    full details of this data use and your rights surrounding it.</Text>
                </VStack>
                <VStack  h='auto' textAlign={'left'} fontFamily='sans-serif'>
                <Text ml='-60' fontWeight={'bold'} fontSize={'26'}>How we use your data</Text>
                    <Text color='black'>In summary, we use your all the  data in the following  ways:</Text>
                <li textAlign='left'>We use your personal and health data to provide you with<br/>
                nutrition goals (for example, your caloric RDI), as well as<br/>
                personalised nutrition guidance.</li>
                <li>We use your in-app activity data to send you educational<br/>
                content about food and nutrition more broadly and guides<br/>
                on how to get the most out of the apps features.</li>
                <li>We use general analytics data to help us improve our and<br/>
                platforms by understanding how our users use features<br/>
                throughout our website and our app.</li>
                </VStack>
                <VStack h='70px' color='gray'  mt='5' fontSize='14'>
                    <Text textAlign={'left'}>
                By clicking ‘Yes, I Agree’ below, you confirm you have read the privacy policy and<br/>
                agree to the uses of your data as outlined above. You can withdraw this permission<br/>
                in Data Consent under My Settings at any time.
                </Text>
                
                </VStack>
                <Box m='auto' w='60%' mt='5' >
                <Stack  direction='row' spacing={280} align='center'>
                <Button  colorScheme='red' variant='outline' onClick={handleClick}>No,I Do Not Agree</Button>
                <Button 
                // mr='80px'
                 colorScheme='green' variant='solid' onClick={handleSignUp}>Yes,I Agree</Button>
                </Stack>
                </Box>
              
            </Box>
            <Text mr='-700px'>© 2022 FatSecret. All rights reserved.</Text>
            </Box>
        </>
    )
}

export default PrivacyPolicy;