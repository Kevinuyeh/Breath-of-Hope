// import React from 'react';
// import Img from '../Assets/image 390.png';
// import { Link } from 'react-router-dom';

// function Community() {
//   return (
//     <div className="w-full bg-bluebg">
//      <h1 className='text-white font-poppins text-1xl p-6 mx-10 md:text-2xl'>Join Our WhatsApp Community</h1>
//         <div className='flex flex-col'>
//             <img src={Img} alt='/img' className='w-[120px] items-center mx-auto justify-center rounded-lg' />
//             <h1 className='text-white mt-5 font-poppins text-2xl text-center md:text-3xl'>Join Our WhatsApp Community</h1>
//             <p className='font-poppins text-center mt-5 text-xl text-gray'>Be a part of the Breath of Hope Amazing family by joining or Community</p>
//             <Link to="/" className="flex justify-center md:justify-start">
//           <button className="mt-5  bg-purp text-white p-3 rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide ">
//             Join Our WhatsApp Community
//           </button>
//           </Link>
//         </div>
//     </div>
//   );
// }

// export default Community;




import React from 'react';
import Img from '../Assets/image 390.png';
import WhatsAppLogo from '../Assets/WhatsApp.png'; 
import { Link } from 'react-router-dom';

function Community() {
  return (
    <div className="w-full bg-bluebg flex flex-col justify-center relative pb-10">
      {/* WhatsApp Logo with opacity */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(${WhatsAppLogo})`,
          backgroundPosition: 'center',
          backgroundSize: '300px',  // Adjust size as needed
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,  // Adjust opacity to make the logo darker but not bright
        }}
      ></div>

      {/* Content Over the Background */}
        {/* <h1 className="text-white font-poppins text-1xl p-6 mx-10 md:text-2xl">Join Our WhatsApp Community</h1> */}
      <div className="relative flex flex-col items-center justify-center mt-10 md:mt-20">
        <img src={Img} alt="/img" className="w-[120px] items-center mx-auto justify-center rounded-lg" />
        <h1 className="text-white mt-5 font-poppins text-2xl text-center md:text-3xl">Join Our WhatsApp Community</h1>
        <p className="font-poppins text-center mt-5 text-xl text-lgray">
          Be a part of the Breath of Hope Amazing family by joining our Community
        </p>
        <Link to="/" className="flex justify-center md:justify-start">
          <button className="mt-5 duration-500 hover:text-gray-400 bg-purp text-white p-3 rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide">
            Join Our WhatsApp Community
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Community;
