import React from 'react'
import { Link } from 'react-router-dom'
import ProfileComponent from '../components/Profile'

const Profile = () => (
  <section>
    <h1>Client 1 - Profile</h1>
    <ProfileComponent />
    <Link to='/'>Home</Link>
  </section>
)

export default Profile
