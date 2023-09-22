import React from 'react'
import { Link , Outlet} from 'react-router-dom'


function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <Link to="profile">Display Profile</Link>
      <Outlet />
    </div>
  )
}

export default About