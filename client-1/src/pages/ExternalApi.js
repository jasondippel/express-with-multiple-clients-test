import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const ExternalApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState('')
  const serverUrl = process.env.SERVER_URL

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`)
      const responseData = await response.json()
      setMessage(responseData.message)
    } catch (error) {
      setMessage(error.message)
    }
  }

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently()
      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      const responseData = await response.json()
      setMessage(responseData.message)
    } catch (error) {
      setMessage(error.message)
    }
  }

  // const callApi = async () => console.log('todo');
  // const callSecureApi = () => console.log('todo');

  return (
    <>
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <button type="button" onClick={callApi}>Get Public Message</button>
      <button type="button" onClick={callSecureApi}>Get Protected Message</button>
      {message && (
        <>
          <h6>Result</h6>
          <code>{message}</code>
        </>
      )}
    </>
  )

}

export default ExternalApi
