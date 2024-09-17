import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Assets/No results found.png'

function NoResult() {
  return (
    <div className='w-full pb-10'>
      <div className='flex flex-col font-poppins items-center justify-center'>
        <h1 className='text-bluebg text-center mt-5 text-2xl md:text-3xl'>No result found</h1>
        <img src={Img} alt='/img' className='w-[200px]' />
        <p className='text-dgray text-center max-w-md mt-5 text-xl'>Kindly sign up and join the WhatsApp community to participate  in the BOH leadership board</p>
        <Link to="/" className="flex justify-center">
          <button className="mt-5 duration-500 hover:text-gray-400 bg-purp text-white p-3 rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide">
            SIGN UP
          </button>
        </Link>

        <Link to="/" className="flex justify-center">
          <button className="mt-5 hover:duration-500 hover:bg-darkpurp hover:text-white bg-white border border-darkpurp text-darkpurp p-3 rounded-lg px-5 md:px-10 text-center mx-auto tracking-wide">
            Join Our WhatsApp Community
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NoResult