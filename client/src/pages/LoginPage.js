import React from 'react'
import Login from '../features/auth/Login'
import GoogleLogin from '../features/auth/Google'

const LoginPage = () => {
  return (
    <div>
      <Login></Login>
      <GoogleLogin></GoogleLogin>
    </div>
  )
}

export default LoginPage
