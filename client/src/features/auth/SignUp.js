import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const history=useNavigate();

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: ""
  })
  console.log(inpval);

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addUser = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;
    const verified = false;
    if (fname === '') {
      alert("enter your name");
    }
    else if (email === '') {
      alert('enter your gmail');
    }
    else if (password === '' || password < 6) {
      alert('enter your password');
    }
    else if (password != cpassword) {
      alert('password doesn\'t match');
    }
    else {
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, password, cpassword, verified
        })
      })

      const res = await data.json();
      console.log(res.status);
      if (res.status === 201) {
        console.log(res);
        alert('registration succesfully');
        history(`/verifyOtp/${res.user.temp}/${res.user.token}`)
        setInpval({ ...inpval, fname: '', email: '', password: '', cpassword: '' });
      }
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="fname"
                name="fname"
                type="fname"
                autoComplete="fname"
                required
                onChange={setVal}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={setVal}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={setVal}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                onChange={setVal}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addUser}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
