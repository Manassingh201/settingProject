import React, { useContext, useEffect } from 'react'
import { loginContext } from '../contextprovider/Context';
import { useNavigate } from 'react-router-dom';

const YourProfile = () => {
  const { loginData, setLoginData } = useContext(loginContext);
  const history = useNavigate();
  const dashboardvalid = async () => {
    console.log('dashboard come');
    let token = localStorage.getItem("userdatatoken");
    const data = await fetch('/validUser', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    console.log('waiting for result');
    const res = await data.json();
    if (!res || res.status === 401) {
      console.log("user not verified");
    }
    else {
      setLoginData(res);
      console.log('yeah after log in is verify');
      console.log("user verify");
    }
  }

  useEffect(() => {
    dashboardvalid();
  }, [])
  return (
    <div>
      this is profille page
      {loginData ?
        loginData.email : "User not logged in"
      }
    </div>
  )
}

export default YourProfile
