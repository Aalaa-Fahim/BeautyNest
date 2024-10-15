import React from 'react';
import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  }
  return (
    <div>
      <h1>SingUp</h1>
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)}/>
      <button >Sing In</button>
    </div>
  )
}

export default Login;