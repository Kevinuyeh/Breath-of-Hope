import React from 'react';
import BohImg from '../Assets/image 392.png';
import YTImg from '../Assets/logos_youtube.png'
import WhatsImg from '../Assets/WhatsApp.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaSpotify} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='w-full bg-bluebg font-poppins'>
      <div className='max-w-[1240px] flex flex-col md:flex-row flex-wrap justify-between items-center mx-auto gap-6 mt-8'>
        
        <div className='flex flex-col items-center w-full mt-10 md:w-[30%]'>
          <img src={BohImg} alt='/img' className='w-[150px] mx-auto' />
          <p className='text-white mt-5 text-center px-4'>
            Have you ever struggled with emptiness? You are not alone in this world, we are here to help you restore your hope by booking a session and talking to our representative.
          </p>
          <button
            type="submit"
            className="bg-lightblue text-xl hover:bg-white text-bluebg w-[200px] text-center items-center justify-center flex mx-auto py-2 px-4 rounded-lg transition duration-300 mt-6"
          >
            Book Session
          </button>
        </div>

        
        <div className='flex flex-col items-center w-full md:w-[30%] mt-8 md:mt-0'>
          <h1 className='text-2xl md:text-3xl text-lightblue font-bold'>Pages</h1>
          <ul className='flex flex-col mt-5 text-center'>
            <li><Link to='/'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Home Page</h1></Link></li>
            <li><Link to='/videopage'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Latest Videos</h1></Link></li>
            <li><Link to='/sessionpage'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Book Sessions</h1></Link></li>
          </ul>
        </div>

        
        <div className='flex flex-col items-center w-full md:w-[30%] mt-8 md:mt-28'>
          <h1 className='text-white text-center'>BE A PART OF OUR AMAZING COMMUNITY!</h1>
          <img src={WhatsImg} alt='/img' className='w-[150px] mt-4' />
          <a href="https://chat.whatsapp.com/HAP1HqYMtLI6rZGploazja" target='_blank' rel='noopener noreferrer' className="flex justify-center">
            <button className="mt-5 hover:duration-500 hover:bg-white hover:text-bluebg bg-transparent border border-white text-white p-3 rounded-lg px-5  text-center mx-auto tracking-wide">
              Join Our WhatsApp Community
            </button>
          </a>
        </div>
      </div>

<div className='flex items-center justify-end gap-4 mt-5 p-6'>
  <h1 className='text-white'>Follow us:</h1>
 <a href='https://www.instagram.com/akanvictor?igsh=MWpucnFsdGN6bnp5bA==' target='_blank' rel='noopener noreferrer'> <FaInstagram size={40} className='bg-lblue p-2 rounded-lg text-white' /></a>
  <a href='' target='_blank' rel='noopener noreferrer'><FaFacebook size={40} className='bg-lblue p-2 rounded-lg text-white' /></a>
  <a href='https://x.com/victorakan70?s=09' target='_blank' rel='noopener noreferrer'><FaXTwitter size={40} className='bg-lblue p-2 rounded-lg text-white' /></a>
  <a href='https://open.spotify.com/show/0re0leTNwvStIGiDneEQWz?si=6_U7FJCyS26Y5u1eV9_Viw' target='_blank' rel='noopener noreferrer'><FaSpotify size={40} className='bg-lblue p-2 rounded-lg text-white' /></a>
   <a href='https://youtube.com/@breathofhopepodcast?si=CGRCtOQgeZ9nwkYn' target='_blank' rel='noopener noreferrer'><img src={YTImg} alt='/img' className='w-[70px]'/></a>
</div>

    </div>
  );
}

export default Footer;
