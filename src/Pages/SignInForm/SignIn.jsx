import { useState } from "react";
import { Footer } from "../Footer";
import { SignUpNavbar } from "../SignUpNavbar";
import { Foods } from "../Foods";
import "./SignIn.css";
import axios from "axios";
import {Grid,GridItem,VStack,HStack,Box,Text,
} from "@chakra-ui/react"

const userData = {
  email: "",
  password: "",
};

function SignIn({ onClick }) {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await axios
        .post("https://safe-eyrie-23497.herokuapp.com/signin", formData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.first_name);
            alert("You are successfully logged in, Click Ok to Continue");
            window.location = "/foods";
          }
        });
    } catch (err) {
      console.log("error :", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
    <SignUpNavbar/>
      <div className="boxmodal">
        {/* <SignInHeader onClick={onClick} /> */}
        <div className="loginContainer">
          <p>All fields are required unless marked optional. </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={handleChange}
              required={true}
              name="email"
              type="email"
              placeholder="Email"
            />

            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required={true}
              minLength="8"
              placeholder="Password"
            />
            <div className="psw_validation_info">
              <ul>
                <li>Must be between 8 and 32 character</li>
                <li>Contain one uppercase letter</li>
              </ul>
              <ul>
                <li>Contain one lowercase letter</li>
                <li>One number (0-9) or one special character</li>
              </ul>
            </div>

            <input className="loginButton" type="submit" value="Login" />
       
          </form>
         

      </div>
      
        </div>


      
      <Footer/>
    </>
  );
}

export default SignIn;