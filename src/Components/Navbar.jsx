import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../Assets/image 2.png';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className='p-3 bg-purp font-poppins text-white shadow md:flex md:items-center md:justify-between'>
        
        <div className='flex justify-between items-center w-full md:w-1/3'>
          <Link to='/'>
            <span className='text-2xl cursor-pointer'>
              <img className='h-[60px] bg-purp' src={Logo} alt='Logo' />
            </span>
          </Link>
          
          <span onClick={handleNav} className='cursor-pointer md:hidden block'>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </span>
        </div>

        
        <ul className='hidden md:flex md:items-center md:justify-center w-full'>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Home Page</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Latest Videos</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Book Session</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Join Our Community</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Leader Board</Link></li>
        </ul>

        
        <div className='hidden md:flex justify-center items-center md:w-1/3'>
          <ul className='flex'>
            <li className='mx-4 my-6 md:my-0 text-xl duration-500 border rounded-lg px-4 md:px-6 hover:text-gray-400'><Link to='/'>Log In</Link></li>
            <li className='mx-4 my-6 md:my-0 md:text-xl duration-500 bg-dark rounded-lg md:px-6 hover:text-gray-400'><Link to='/'>Sign Up</Link></li>
          </ul>
        </div>

        
        <ul
          className={`fixed top-0 left-0 w-2/3 bg-purp h-full border-r border-gray-300 z-50 transform ${
            nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <li className='mx-4 my-6 text-xl'><Link to='/'>Home Page</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Latest Videos</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Book Session</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Join Our Community</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Leader Board</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Log In</Link></li>
          <li className='mx-4 my-6 text-xl'><Link to='/'>Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
