import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-[100px] text-center">
      <h1 className="md:text-5xl text-3xl font-bold text-pink-500">Contact Us</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Got a question or feedback? We’d love to hear from you! Our team is always here to assist you with any inquiries about our books, services, or your orders.
      </p>
      <div className="mt-8 text-left md:text-center">
        <ul className="list-disc md:list-none md:inline-block">
          <li>Email: <a href="mailto:info@bookstore.com" className="text-pink-500 hover:underline">info@bookstore.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-pink-500 hover:underline">+1 (234) 567-890</a></li>
          <li>Address: 123 Bookstore Ave, City, Country</li>
        </ul>
      </div>
      <p className="mt-5 text-lg leading-relaxed">
        Follow us on social media to stay updated with the latest releases and special offers!
      </p>
      <Link to="/Bookies">
        <button className="mt-8 py-2 px-6 bg-pink-500 text-white rounded-md hover:bg-pink-700">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Contact;
