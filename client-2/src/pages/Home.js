import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <h1>Client 1 - Home</h1>
    <Link to='/profile'>Profile (Authenticated)</Link><br />
    <Link to='/external-api'>External API</Link>
  </section>
)

export default Home
