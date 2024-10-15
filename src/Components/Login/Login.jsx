import React, { useState } from 'react';
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
    
  };

  return (
    <div>
      <h1>SingUp</h1>
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={SignIn}>Sign In</button>
    </div>
  )
}

export default Login;