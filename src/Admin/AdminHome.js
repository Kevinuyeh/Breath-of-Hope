import React from 'react'
import Nav from './Nav'
import AdminHero from './AdminHero'
import EditVideo from './EditVideo'

function AdminHome() {
  return (
    <div>
        <Nav />
        <AdminHero />
        <EditVideo />
    </div>
  )
}

export default AdminHome