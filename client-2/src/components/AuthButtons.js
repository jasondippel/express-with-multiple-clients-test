import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignUpButton from './SignUpButton'

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null
  }

  return isAuthenticated ? <LogoutButton /> : (
    <>
      <LoginButton />
      <SignUpButton />
    </>
  )
};

export default AuthenticationButton;
