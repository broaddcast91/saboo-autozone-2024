import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHeadernew = () => {
  return (
    <div className='bg-[#9E2A31] text-white'>
      <div className='container flex items-center justify-between px-4 py-2 mx-auto'>
        <div className='flex items-start space-x-4'>
          <Link to='/book-a-service'>
            <button className='text-sm bg-white text-[#6E1D22] hover:bg-slate-100 px-3 py-1 rounded-3xl border border-white'>
              Book a Service
            </button>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaInstagram />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeadernew;
