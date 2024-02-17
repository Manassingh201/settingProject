import React from 'react'
import "./google.css"

const GoogleLogin = () => {

  const loginwithgoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self")
  }

  return (
    <>
      <div className='login-page'>
        <h1 style={{textAlign:"center"}}>Login</h1>
        <div className='form'>
          <button className='login-with-google-btn' onClick={loginwithgoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    </>

  )
}

export default GoogleLogin