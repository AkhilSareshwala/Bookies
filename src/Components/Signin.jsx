import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <dialog id="my_modal_3" className="modal container mx-auto md:px-20 px-4">
      <div className="modal-box bg-gray-100 dark:bg-gray-800 dark:text-gray-200 relative">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          onClick={() => document.getElementById('my_modal_3').close()}
        >
          <IoCloseSharp className="hover:text-red-500 dark:hover:text-red-400" />
        </button>
        
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-400 dark:focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-400 dark:focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
          >
            Sign In
          </button>
        </form>
        
        <p className="mt-3 text-center text-gray-700 dark:text-gray-400">
          Already have an account? <a href="/login" className="hover:text-blue-400 hover:font-bold dark:hover:text-blue-300">Login</a>
        </p>
      </div>
    </dialog>
  );
};

export default Signin;
