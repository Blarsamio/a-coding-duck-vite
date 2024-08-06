import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='/' className='text-white text-2xl font-bold'>
          <img src={Logo} alt='logo' className='w-24' />
        </a>
        <button className='bg-pink-500 text-white px-4 py-2 rounded-lg'>Contact</button>
      </div>
    </div>
  </header>;
};

export default Header;
