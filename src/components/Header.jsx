import React from 'react';
import Logo from '../assets/patricio.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='/' className='text-white text-2xl font-bold'>
          <img src={Logo} alt='logo' className='w-24' />
        </a>

        <button className='btn btn-sm'>
          <a href='/src/assets/cv.pdf' download={true} >get my cv</a>
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
