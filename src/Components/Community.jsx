import React from 'react';
import Img from '../Assets/image 390.png';
import WhatsAppLogo from '../Assets/WhatsApp.png';
// import { Link } from 'react-router-dom';

function Community() {
  return (
    <div className="w-full bg-bluebg flex flex-col justify-center relative pb-10">

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(${WhatsAppLogo})`,
          backgroundPosition: 'center',
          backgroundSize: '300px',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
        }}
      ></div>


      <div className="relative flex flex-col items-center justify-center mt-10 md:mt-20">
        <img src={Img} alt="/img" className="w-[120px] items-center mx-auto justify-center rounded-lg" />
        <h1 className="text-white mt-5 font-poppins text-2xl text-center md:text-3xl">Join Our WhatsApp Community</h1>
        <p className="font-poppins text-center mt-5 text-xl text-lgray">
          Be a part of the Breath of Hope Amazing family by joining our Community
        </p>
        <a href="https://chat.whatsapp.com/HAP1HqYMtLI6rZGploazja" target='_blank' rel='noopener noreferrer' className="flex justify-center md:justify-start">
          <button className="mt-5 duration-500 hover:text-gray-400 bg-purp text-white p-3 rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide">
            Join Our WhatsApp Community
          </button>
        </a>
      </div>
    </div>
  );
}

export default Community;
