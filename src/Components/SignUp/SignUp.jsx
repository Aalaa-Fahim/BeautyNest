import React, { useState } from 'react'
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;

  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully");
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl text-[#695c5c] font-bold mb-6 text-center">Sign Up</h1>
        <input 
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695c5c]"
          placeholder='Enter Your Email' 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695c5c]"
          type="password" 
          placeholder='Password' 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695c5c]"
          type="password" 
          placeholder='Confirm Password' 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button 
        className="w-full bg-[#695c5c] text-white py-2 rounded-lg hover:bg-goldenPink transition duration-200" onClick={signUp}>Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? 
          <Link to='/login' className="text-[#695c5c] font-semibold hover:underline">
            Login.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;