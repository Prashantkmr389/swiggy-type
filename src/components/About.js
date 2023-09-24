import React, {useContext} from 'react'
import { Link , Outlet} from 'react-router-dom'
import UserContext from '../utils/userContext'

function About() {
  const {user} = useContext(UserContext)

  return (
    <div>
      <h1>About Us Page</h1>
      <h2 className='font-bold'>{user.name}</h2>
      <Link to="profile">Display Profile</Link>
      <Outlet />
    </div>
  )
}

export default About