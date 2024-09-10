import React from 'react'

function Figures() {
  return (
    <div className='w-full bg-fblue'>
        <div className='flex items-center justify-around mx-auto p-4 font-judson'>
            <div className='flex flex-col'>
                <h1 className='text-white text-center text-2xl md:text-3xl font-bold'>245</h1>
                <p className='text-white text-center text-xl'>Released Videos</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-white text-center text-2xl md:text-3xl font-bold'>78</h1>
                <p className='text-white text-center text-xl'>Spotify Podcasts</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-white text-center text-2xl md:text-3xl font-bold'>12</h1>
                <p className='text-white text-center text-xl'>Guest Features</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-white text-center text-2xl md:text-3xl font-bold'>380</h1>
                <p className='text-white text-center text-xl'>Reviews</p>
            </div>
        </div>
    </div>
  )
}

export default Figures