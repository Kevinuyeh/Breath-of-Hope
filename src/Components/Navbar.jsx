import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaVideo, FaHandshake, FaUsers, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Assets/image 2.png';
import logo2 from '../Assets/image 392.png'

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
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/sessionpage'>Book Session</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/'>Join Our Community</Link></li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'><Link to='/userleaderboard'>Leader Board</Link></li>
        </ul>


        <div className='hidden md:flex justify-center items-center md:w-1/3'>
          <ul className='flex'>
            <li className='mx-4 my-6 md:my-0 text-xl duration-500 border rounded-lg px-4 md:px-6 hover:text-gray-400'><Link to='/login'>Log In</Link></li>
            <li className='mx-4 my-6 md:my-0 md:text-xl duration-500 bg-dark rounded-lg md:px-6 hover:text-gray-400'><Link to='/signup'>Sign Up</Link></li>
          </ul>
        </div>



        <ul
          className={`fixed top-0 left-0 w-2/3 bg-bluebg h-full border-r p-6 border-gray-300 z-50 transform ${nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } transition-transform duration-300 ease-in-out md:hidden`}
        >

          <li className='mb-8'>
            <img src={logo2} alt='/img' className='w-24 ' />
          </li>


          <li className='mx-4 my-2 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaHome className='mr-2' />
            <Link to='/'>Home Page</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaVideo className='mr-2' />
            <Link to='/latest-videos'>Latest Videos</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaHandshake className='mr-2' />
            <Link to='/sessionpage'>Book Session</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaUsers className='mr-2' />
            <Link to='/join-community'>Join Our Community</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaMedal className='mr-2' />
            <Link to='/userleaderboard'>Leader Board</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2'>
            <Link to='/login'>Log In</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2'>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
