import React, { useState } from 'react';
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const provider = new GoogleAuthProvider();

  

  const LogIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl text-[#695c5c] font-bold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <button 
            className="w-full bg-[#695c5c] text-white py-2 rounded-lg hover:bg-[#695c5c] transition duration-200 mb-2"
            onClick={loginWithGoogle}
            onMouseDown={e => e.preventDefault()}>
            <FaGoogle className="h-5 w-5 mr-2" />
            <span className="flex-grow text-left">Login with Google</span>
          </button>
          <button 
            className="w-full text-[#695c5c] py-2 rounded-lg border border-[#695c5c] hover:bg-[#695c5c] hover:text-white transition duration-200"
            onClick={() => setIsEmailLogin(true)}>
            Login with Email/Password
          </button>
        </div>

        {isEmailLogin && (
          <>
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
            <button 
              className="w-full bg-[#695c5c] text-white py-2 rounded-lg hover:bg-goldenPink transition duration-200" 
              onClick={LogIn}>
              Login
            </button>
          </>
        )}

        <p className="mt-4 text-center text-gray-600">
          Need an account? 
          <Link to='/signup' className="text-[#695c5c] font-semibold hover:underline">
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;