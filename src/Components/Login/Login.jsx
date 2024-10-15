import React, { useState } from 'react';
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
    
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">SingUp</h1>
        <input className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695c5c]"
        placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695c5c]"
        type="password" 
        placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)}/>
        <button className="w-full bg-[#695c5c] text-white py-2 rounded-lg hover:bg-goldenPink transition duration-200" onClick={LogIn}>Sign In</button>
      </div>
    </div>
  )
}

export default Login;