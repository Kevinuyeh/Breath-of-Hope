import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Figures from './Figures'
import LatestVideo from './LatestVideo'
import BookSession from './BookSession'
import Community from './Community'
import NoResult from './NoResult'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Figures />
      <LatestVideo />
      <BookSession />
      <Community />
      <NoResult />
      <Footer />
    </div>
  )
}

export default Home