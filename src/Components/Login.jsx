// src/components/Login.jsx

import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Signin from './Signin';

const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  const handleOpenSignin = () => setShowSignin(true);
  const handleCloseSignin = () => setShowSignin(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg relative">
        <button
          onClick={() => window.location.href = "/Bookies"}
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900"
        >
          <IoCloseSharp className="hover:text-red-500" />
        </button>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Login</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Please fill out the form to login.</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">Don't have an account? 
        <span onClick={()=>document.getElementById('my_modal_3').showModal()} className=" hover:text-red-400 cursor-pointer border-none dark:hover:bg-slate-950 w-[10px ]">Sign in</span>
        <Signin/>
        </p>
      </div>

     
    </div>
  );
};

export default Login;
