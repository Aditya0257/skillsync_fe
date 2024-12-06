// SignIn.jsx
import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import Signinimage from "../assets/signin-image.png";
import { useNavigate } from "react-router";
import axios from "axios";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const url = `http://15.206.195.96:3010/auth/v1/login`;
      console.log("url: ", url);
      const data = {
        email: email,
        password: password,
      }
      axios.post(url, data).then((res) => {
        console.log("Response: ", res.data);
        // store jwt token in local storage
        const token = res.data.accessToken;
        const user_id = res.data.user_id;
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userId', user_id);
        console.log('Token and userId stored in local storage!');
        navigate("/dashboard");
      });
      
    } catch (error) {
      console.error('Login failed: ', error.message);
    }
   
  }


  return (
    <AuthLayout imageSrc={Signinimage}>
      <h1 className="text-3xl font-bold mb-4">Welcome! Sign In to Continue</h1>
      <p className="mb-6">
        Don’t have an account?{" "}
        <button onClick={function (){
          navigate("/signup")
        }} className="text-blue-500 font-medium">
          Create account
        </button>
      </p>
      <div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleSignin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>

      <div className="mt-4 text-center">
        <button className="flex items-center justify-center w-full border rounded-lg py-2 text-gray-700 hover:bg-gray-100">
        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          Sign in with Google
        </button>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
