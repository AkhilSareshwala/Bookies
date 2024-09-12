import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative overflow-hidden h-screen bg-white">
      {/* Bubble Animation */}
      

      <div className="relative z-10 max-w-screen-2xl container mx-auto md:px-20 px-4 pt-[100px] text-center">
        <h1 className="md:text-5xl text-3xl font-bold text-pink-500">About Us</h1>
        <p className="mt-5 text-lg leading-relaxed">
          Welcome to our bookstore! We are more than just a place to find books—we're a community of passionate readers and learners. Our mission is to provide access to a wide variety of books for all ages and interests, ensuring that everyone can find something to enjoy.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Whether you love fiction, non-fiction, or exploring new genres, we have it all. We believe in the power of reading to inspire, educate, and connect people across the globe. We're here to help you discover your next favorite read and support you in your journey of lifelong learning.
        </p>
        <Link to="/Bookies">
          <button className="mt-8 py-2 px-6 bg-pink-500 text-white rounded-md hover:bg-pink-700">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
