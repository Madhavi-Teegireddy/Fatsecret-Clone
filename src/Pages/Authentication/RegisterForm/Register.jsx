import React, { useState, useEffect } from "react";
import "./Register.css";
import { SignUpNavbar } from "../../SignUpNavbar";
import axios from "axios";
import { Box,
  Image,
  Divider,
  Heading,
  HStack,Text,FormControl,FormLabel,Input,Select,Grid,Button
 } from "@chakra-ui/react";

const userData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  country: "",
  address_1: "",
  address_2: "",
  zip: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const userInfo = await axios
        .post("https://safe-eyrie-23497.herokuapp.com/signup", formData)
        .then((res) => {
          if (res.statusText === "OK") {
            alert("You are registered succesfully");
            window.location = "/login";
            // console.log(userInfo)
          }
        });
      console.log(userInfo);
    } catch (err) {
      console.log("error :", err);
      alert("Email already exists, Try with a new email");
    }
  };

  return (
    <>
    <SignUpNavbar/>
    <Box h='1200px'>
      <Box w='70%' h='1000px' border='1px dashed gray' m='auto' mt='60px'>
        <HStack justifyContent={'space-between'}>
      <Image mt='12px' ml='10' src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png"/>
      <Heading mt='20px' fontSize={'28px'} color="blue.200">My FatSecret Account</Heading>
      </HStack>
      <Divider mt='5' orientation='horizontal' />


      {/* input forms */}

      <Box h='800px'  w='60%' m='auto' mt='30px'>
        <Text>All fields are required unless marked optional. </Text>
        <form onSubmit={(e) => handleSubmit(e)}>


        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
          placeholder='first_name'
          onChange={handleChange}
          required={true}
          name="first_name"
          /></FormControl>


        <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
          <Input
          onChange={handleChange}
          required={true}
          name="last_name"
          placeholder="Last name"
          />
          </FormControl>

          <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            onChange={handleChange}
            required={true}
            name="phone"
            placeholder="Enter Mobile Number"
            maxLength="10"
            minLength="10"
          />
          </FormControl>

          <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={handleChange}
            required={true}
            name="email"
            type="email"
            placeholder="Email"
          />
          </FormControl>

          <FormControl isRequired>
          <FormLabel>Country</FormLabel>
          <Select
          required={true}
          id="selectCountry"
          onChange={handleChange}
          name="country"
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            </Select>
            </FormControl>

            <FormControl isRequired>
            <FormLabel>Adress 1</FormLabel>
            <Input
            onChange={handleChange}
            required={true}
            name="address_1"
            placeholder="Address 1"
            />
            </FormControl>

            <FormControl isRequired>
            <FormLabel>Adress 2</FormLabel>
            <Input
            onChange={handleChange}
            name="address_2"
            placeholder="Address 2 (optional)"
            />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Zip</FormLabel>
              <Input
              onChange={handleChange}
              name="zip"
              required={true}
              maxLength="6"
              minLength="6"
              placeholder="Zip"
              />
            </FormControl>

            <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            required={true}
            minLength="8"
            placeholder="Password"
            />
            </FormControl>


          <Box mt='30px'>
            <Grid templateColumns='repeat(2,1fr)' gap={8}>
              <ul>
              <li>Must be between 8 and 32 character</li>
              <li>Contain one uppercase letter</li>
              </ul>
              
              <ul>
              <li>Contain one lowercase letter</li>
              <li>One number (0-9) or one special character</li>
              </ul>
              </Grid>
          </Box>
          <input className="submitButton" type="submit" value="Next" /> 
        </form>
       
      </Box>
      </Box>
      </Box>
    </>
  );
}



export default Register;