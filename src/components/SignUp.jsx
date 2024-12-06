// SignUp.jsx
import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import Signupimage from "../assets/signup-image.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      console.log("HERE !");
      const url = `http://15.206.195.96:3010/auth/v1/signup`;
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
      console.error('Signup failed: ', error.message);
    }
   
  }

  return (
    <AuthLayout imageSrc={Signupimage}>
      <h1 className="text-3xl font-bold mb-4">
        New to SkillSync? Create your Account
      </h1>
      <p className="mb-6">
        Already have an account?{" "}
        <button onClick={function (){
          navigate("/signin")
        }} className="text-blue-500 font-medium">
          Sign In
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

        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={() => {
            handleSignup();
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
