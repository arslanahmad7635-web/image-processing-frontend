import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { lazy } from "react"
import { PuffLoader } from "react-spinners";


// Basic Site
const HomeScreen = lazy(() => import('./Screens/HomeScreen/HomeScreen'));
const LoginScreen = lazy(() => import('./Screens/LoginScreen/LoginScreen'));
const SignupScreen = lazy(() => import('./Screens/SignupScreen/SignupScreen'));
const AboutScreen = lazy(() => import('./Screens/AboutScreen/AboutScreen'));
const ContactScreen = lazy(() => import('./Screens/ContactScreen/ContactScreen'));
const PricingScreen = lazy(() => import('./Screens/PricingScreen/PricingScreen'));
const EnhanceScreen = lazy(() => import('./Screens/EnhanceScreen/EnhanceScreen'));
const OTPVerifyScreen = lazy(() => import('./Screens/OTPVerifyScreen/OTPVerifyScreen'));


function App() {

  return (
    <BrowserRouter>

    <Suspense fallback={
        <section className="w-full h-screen flex items-center justify-center">

          <PuffLoader color="#006964" />

        </section>
        }>

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

      </Suspense>

    </BrowserRouter>
  )
}

export default App
