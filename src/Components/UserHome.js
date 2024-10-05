import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Figures from './Figures'
import LatestVideo from './LatestVideo'
import BookSession from './BookSession'
import Community from './Community'
import LeaderBoard from './LeaderBoard'
import Footer from './Footer'

function UserHome() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Figures />
        <LatestVideo />
        <BookSession />
        <Community />
        <LeaderBoard />
        <Footer />
    </div>
  )
}

export default UserHome