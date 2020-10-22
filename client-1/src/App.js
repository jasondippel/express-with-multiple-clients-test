import React from 'react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

const App = () => {
  return <>
    <h1>Client 1</h1>
    <Profile />
    <LoginButton />
    <LogoutButton />
  </>
}

export default App
