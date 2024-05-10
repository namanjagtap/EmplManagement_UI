'use client'

import Employee from "./components/Employee"
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default function Home() {

  return (
    <BrowserRouter>
      <Auth0Provider
      domain="dev-2yve6ieic7sp55cm.us.auth0.com"
      clientId="je2rGZ9NR6yrDy6o0vStpzcQi63b6Yim"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      >
        <h1>Auth0 Login</h1>
        <Routes>
          <Route path="/*" element={
            <>
              <LoginButton/>
              <LogoutButton/>
              <Profile/>
              <Employee/>
            </>
          } />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
}
