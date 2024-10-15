import React, { useState } from 'react'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {

  }
  return (
    <div>
      <h1>Sign Up</h1>
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default SignUp;