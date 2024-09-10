import React from 'react';
import { Link } from 'react-router-dom';
import HomeIMG from '../Assets/home page image.png';

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-5 py-5 md:px-10 md:py-10">
        <h1 className="text-darkpurp font-poppins text-3xl md:text-6xl font-bold mt-5 md:mt-10 text-center md:text-left">
          Welcome To Breath Of Hope
        </h1>
        <p className="text-lg md:text-xl mt-5 md:mt-10 text-center md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptates, natus necessitatibus numquam qui ratione eveniet dolorum, eum nostrum incidunt aspernatur voluptas modi? Illo, vel natus eos recusandae aut neque qui, quas enim reiciendis error velit, hic nihil? Quam asperiores minima nesciunt porro fuga, deserunt nihil nemo iste quisquam recusandae!
        </p>
        <Link to="/" className="flex justify-center md:justify-start">
          <button className="mt-5 md:mt-10 bg-purp text-white p-3 rounded-lg px-5 md:px-20 text-center tracking-wide text-lg md:text-xl">
            Join Our WhatsApp Community
          </button>
        </Link>
      </div>

      
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">

        <div
          className="absolute top-0 left-0 h-full z-20"
          style={{
            width: '50%',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent)',
          }}
        ></div>
        
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        
        <img 
          src={HomeIMG}
          className="w-full h-full object-cover z-0"
          alt="/img"
        />
      </div>
    </div>
  );
}

export default Hero;
