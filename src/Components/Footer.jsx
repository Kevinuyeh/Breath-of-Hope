// import React from 'react'
// import BohImg from '../Assets/image 392.png'
// import WhatsImg from '../Assets/WhatsApp.png'
// import { Link } from 'react-router-dom'

// function Footer() {
//     return (
//         <div className='w-full bg-bluebg font-poppins'>
//             <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto gap-6 mt-8 items-center justify-center'>
//                 <div className='flex flex-col'>
//                     <img src={BohImg} alt='/img' className='w-[150px] mx-auto'/>
//                     <p className='text-white  mt-5'>Have you ever struggled with emptiness? You are not alone in this world, we are here to help you restore your hope by booking a session and talking to our representative.</p>
//                     <button
//                         type="submit"
//                         className="bg-lightblue text-bluebg w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg transition duration-300 mt-6"
//                     >
//                         Book Session
//                     </button>
//                 </div>

//                 <div className='flex flex-col justify-center items-center mx-auto mt-10'>
//                     <h1 className='text-2xl md:text-3xl text-lightblue font-bold'>Pages</h1>
//                     <ul className='flex flex-col mt-5'>
//                         <li><Link to='/'><h1 className='text-white text-xl'>Home Page</h1></Link></li>
//                         <li><Link to='/'><h1 className='text-white text-xl'>Latest Videos</h1></Link></li>
//                         <li><Link to='/'><h1 className='text-white text-xl'>Book Sessions</h1></Link></li>
//                     </ul>
//                 </div>

//                 <div className='flex flex-col mx-auto'>
//                     <h1 className='text-white text-xl'>BE A PART OF OUR AMAZING COMMUNITY!</h1>
//                     <img src={WhatsImg} alt='/img' className='w-[150px]' />
//                     <Link to="/" className="flex justify-center">
//                         <button className="mt-5 hover:duration-500 hover:bg-white hover:text-bluebg bg-transparent border border-darkpurp text-white p-3 border border-white rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide">
//                             Join Our WhatsApp Community
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer









import React from 'react';
import BohImg from '../Assets/image 392.png';
import YTImg from '../Assets/logos_youtube.png'
import WhatsImg from '../Assets/WhatsApp.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
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
            className="bg-lightblue text-bluebg w-[200px] text-center items-center justify-center flex mx-auto py-2 px-4 rounded-lg transition duration-300 mt-6"
          >
            Book Session
          </button>
        </div>

        
        <div className='flex flex-col items-center w-full md:w-[30%] mt-8 md:mt-0'>
          <h1 className='text-2xl md:text-3xl text-lightblue font-bold'>Pages</h1>
          <ul className='flex flex-col mt-5 text-center'>
            <li><Link to='/'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Home Page</h1></Link></li>
            <li><Link to='/'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Latest Videos</h1></Link></li>
            <li><Link to='/'><h1 className='text-white text-xl hover:duration-500 hover:text-lightblue'>Book Sessions</h1></Link></li>
          </ul>
        </div>

        
        <div className='flex flex-col items-center w-full md:w-[30%] mt-8 md:mt-0'>
          <h1 className='text-white text-xl text-center'>BE A PART OF OUR AMAZING COMMUNITY!</h1>
          <img src={WhatsImg} alt='/img' className='w-[150px] mt-4' />
          <Link to="/" className="flex justify-center">
            <button className="mt-5 hover:duration-500 hover:bg-white hover:text-bluebg bg-transparent border border-white text-white p-3 rounded-lg px-5  text-center mx-auto tracking-wide">
              Join Our WhatsApp Community
            </button>
          </Link>
        </div>
      </div>

      {/* <div className='flex gap-10 mt-5 p-6'>
        <h1 className='text-white'>Follow us: </h1>
        <FaInstagram size={40} className='bg-lblue p-2 rounded-lg text-white ' />
        <FaFacebook size={40} className='bg-lblue p-2 rounded-lg text-white ' />
        <FaXTwitter size={40} className='bg-lblue p-2 rounded-lg text-white ' />
        <FaSpotify size={40} className='bg-lblue p-2 rounded-lg text-white ' />
       
      </div> */}

<div className='flex items-center justify-end gap-4 mt-5 p-6'>
  <h1 className='text-white'>Follow us:</h1>
  <FaInstagram size={40} className='bg-lblue p-2 rounded-lg text-white' />
  <FaFacebook size={40} className='bg-lblue p-2 rounded-lg text-white' />
  <FaXTwitter size={40} className='bg-lblue p-2 rounded-lg text-white' />
  <FaSpotify size={40} className='bg-lblue p-2 rounded-lg text-white' />
   <img src={YTImg} alt='/img' className='w-[70px]'/>
</div>

    </div>
  );
}

export default Footer;
