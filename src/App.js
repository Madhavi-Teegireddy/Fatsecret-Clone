
import './App.css';
import {Home} from "./Pages/Home";
import {Routes,Route} from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import {SignUp} from "./Pages/SignUp";
import Register from "./Pages/Authentication/RegisterForm/Register";
import Sign from "./Pages/SignInForm/SignIn/SignInPage";
import {Foods} from "./Pages/Foods"


function App() {
  return (
    <div className="App">

     
      {/* <Home/> */}
      
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/priv' element={<PrivacyPolicy/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path="/login" element={<Sign/>}></Route>
      <Route path='/foods' element={<Foods/>}></Route>
      
      </Routes>
      
      
    </div>
  );
}

export default App;
