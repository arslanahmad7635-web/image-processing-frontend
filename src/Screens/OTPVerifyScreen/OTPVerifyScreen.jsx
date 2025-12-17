import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

function OTPVerifyScreen() {
        
    const navigate = useNavigate();
    const [OTPVerifyError, setOTPVerifyError] = useState("");
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
    const inputRefs = useRef([]); // To store references to all the input fields
    
    async function handleOTPVerify(e) {

        e.preventDefault();

        setIsSubmitButtonDisabled(true);

        // Collecting all the OTP inputs into a single string
        const otp = inputRefs.current.map((input) => input.value).join("");

        try {
        const verification_token = localStorage.getItem("verification_token");
        const data = {
            "verification_token" : verification_token,
            "otp" : otp,
        };

        // Make the verification request
        const response = await axios.post(`http://127.0.0.1:8000/authentication/user_otp_verify`, data);

        console.log("OTP Verification Successful:", response.data);

        localStorage.removeItem("verification_token");
        localStorage.setItem('store_date', response.data["store_date"]);
        localStorage.setItem('store_time', response.data["store_time"]);

        setIsSubmitButtonDisabled(false);


        navigate("/");

        } catch (error) {

        console.error(
            error.response ? error.response.data : error.message
        );

        setOTPVerifyError("Invalid OTP. Please try again.");

        setIsSubmitButtonDisabled(false);

        }
    }

    const handleInput = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = value;

        if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus(); // Move to the next input
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
        inputRefs.current[index - 1].focus(); // Move to the previous input
        }
    };


    useEffect(() => {
      
        if(!localStorage.getItem('verification_token')){

            return () => {
                navigate(-1);
            };

        }

    }, []);
    

    return (
        <section className="w-full h-screen flex items-center justify-center font-poppins">
        <form
            onSubmit={handleOTPVerify}
            className="shadow-md flex flex-col items-center justify-center border-2 border-primary py-4 px-6 rounded-sm bg-white relative"
            style={{ width: "25rem" }}
        >
            {OTPVerifyError && (
            <p
                id="login_err"
                className="py-2 bg-red-500 text-center text-white -top-14 w-full absolute"
            >
                {OTPVerifyError}
            </p>
            )}

            <h1 className="text-2xl mb-4 text-primary font-semibold">Verify OTP</h1>
            
            <p className="text-sm text-yellow-600 mb-8">An OTP Was Sent To Your Provided Email</p>

            <div className="w-full flex items-center justify-between mb-2">
            {[0, 1, 2, 3].map((_, index) => (
                <input
                key={index}
                type="text"
                ref={(el) => (inputRefs.current[index] = el)} // Assign refs dynamically
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                className="border-2 border-primary w-14 h-14 focus:outline-none text-xl text-primary text-center rounded-sm"
                />
            ))}
            </div>

            <button
            type="submit"
            className="w-full mt-5 py-3 bg-primary text-white transition outline-none rounded-sm"
            >
            {isSubmitButtonDisabled ? <BarLoader /> : 'Verify'}
            </button>
        </form>
        </section>
    );
}

export default OTPVerifyScreen