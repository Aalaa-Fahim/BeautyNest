import React, { useState } from 'react'


const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = () => {

  }
  return (
    <div>
      <h1>SingUp</h1>
      <input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={singIn}>Sing In</button>
    </div>
  )
}

export default SingUp;