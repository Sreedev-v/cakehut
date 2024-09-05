// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white h-[30vh] bg-browncol mt-[50px]">
      <hr />
      <div className="">
        <div className="flex flex-row justify-between items-center px-20 py-10 ">

          <div className='flex flex-col w-1/3'>
          <Link to="/" className="text-4xl font-bold "> CAKEHUT <span className='text-amber-600'>.</span></Link>
          <span>Sweet Moments Start Here.</span>
          </div>

          <div className='flex flex-col w-2/3'>
          <p>Cake Hut</p>
          <p>123 Sweet Street</p>
          <p>Sugarland, CA 98765</p>
          <p>info@cakehut.com</p>
          </div>
        </div>
        <hr />
        <div className="my-1 py-8 text-center bg-browncol">
            <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;