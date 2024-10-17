import React, { useState } from 'react';
import { auth, googleProvider } from "../../firebase.config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const navigate = useNavigate();

  const LogIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error("This account does not exist. Please, try again.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Google account login successful!');
      navigate('/');
    } catch (error) {
      toast.error(`Google login failed`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-[#f3d6cf] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl text-[#695c5c] font-bold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <button 
            className="w-full bg-[#695c5c] text-white py-2 rounded-lg hover:bg-[#695c5c] transition duration-200 mb-2 flex items-center justify-center"
            onClick={loginWithGoogle}
            onMouseDown={e => e.preventDefault()}>
            <FaGoogle className="h-5 w-5 mr-2" />
            <span>Login with Google</span>
          </button>
          
          {/* Conditional Rendering for Email/Password Button */}
          {!isEmailLogin && (
            <button 
              className="w-full text-[#695c5c] py-2 rounded-lg border border-[#695c5c] hover:bg-[#695c5c] hover:text-white transition duration-200"
              onClick={() => {
                setIsEmailLogin(true); // Hide this button
              }}>
              Login with Email/Password
            </button>
          )}
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

        <p className="mt-6 text-center text-gray-600">
          Don't have an account? 
          <Link to='/signup' className="ml-2 text-[#695c5c] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
