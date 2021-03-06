import React from 'react'
import { Route, Switch } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import ProtectedRoute from './auth/ProtectedRoute'
import AuthButtons from './components/AuthButtons'
import Loading from './components/Loading'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ExternalApi from './pages/ExternalApi'

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app">
      <AuthButtons />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/external-api" component={ExternalApi} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App
