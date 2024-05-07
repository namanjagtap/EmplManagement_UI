'use client'

import Employee from "./components/Employee"
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react"


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default function Home() {
  const {isLoading, error} = useAuth0();
  return (
    <Auth0Provider
    domain="dev-2yve6ieic7sp55cm.us.auth0.com"
    clientId="je2rGZ9NR6yrDy6o0vStpzcQi63b6Yim"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
        <h1>Auth0 Login</h1>
        {/* {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
          </>
        )} */}
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <Employee/>
    </Auth0Provider>
  );
}
