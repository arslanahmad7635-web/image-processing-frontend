import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import SignupScreen from "./Screens/SignupScreen/SignupScreen"
import AboutScreen from "./Screens/AboutScreen/AboutScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import PricingScreen from "./Screens/PricingScreen/PricingScreen"
import EnhanceScreen from "./Screens/EnhanceScreen/EnhanceScreen"
import OTPVerifyScreen from "./Screens/OTPVerifyScreen/OTPVerifyScreen"




function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* General Screen */}
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about-us" element={<AboutScreen />}></Route>
        <Route path="/contact-us" element={<ContactScreen />}></Route>
        <Route path="/pricing" element={<PricingScreen />}></Route>
        <Route path="/image-enhancement" element={<EnhanceScreen />}></Route>
        

        {/* Authentication Screens */}
        <Route path="/user-register" element={<SignupScreen />}></Route>
        <Route path="/user-otp-verify" element={<OTPVerifyScreen />}></Route>
        <Route path="/user-login" element={<LoginScreen />}></Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
