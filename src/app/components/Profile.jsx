'use client'
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);   

    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "dev-2yve6ieic7sp55cm.us.auth0.com";

          try {
            const accessToken = await getAccessTokenSilently({
              ignoreCache: true,
              audience: 'ignoreCache: true',
            });
            console.log("Access Token:- "+accessToken)
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
            console.log("User Details by ID Url:- "+userDetailsByIdUrl)
            
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            console.log("Meta Data Reponse;- "+metadataResponse)
      
            const { user_metadata } = await metadataResponse.json();
      
            setUserMetadata(user_metadata);
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, [getAccessTokenSilently, user?.sub]);

    // useEffect(() => {
    //     const fetchAccessToken = async () => {
    //         const options = {
    //             clientID: 'je2rGZ9NR6yrDy6o0vStpzcQi63b6Yim',
    //             domain: 'dev-2yve6ieic7sp55cm.us.auth0.com',
    //             responseType: 'token id_token',
    //             audience: 'YOUR_API_IDENTIFIER',
    //             redirectUri: 'http://localhost:3000/',
    //             scope: 'openid profile email'
    //           };
    //       if (isAuthenticated) {
    //         try {
    //           const accessToken = await getAccessTokenSilently();
    //           console.log('Access Token:', accessToken);
    //         } catch (error) {
    //           console.error('Error fetching access token:', error);
    //         }
    //       }
    //     };
    
    //     fetchAccessToken();
    //   }, [getAccessTokenSilently, isAuthenticated]);

    return (
        isAuthenticated && (
            <article>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
                </ul>
                <h3>User Metadata</h3>
                {userMetadata ? (<pre>{JSON.stringify(userMetadata, null, 2)}</pre>) : ("No user metadata defined")}
            </article>
        )
    )
}

export default Profile