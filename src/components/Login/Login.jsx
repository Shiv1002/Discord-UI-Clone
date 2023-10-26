import React from 'react'
import discordLogo from "/discord_main_logo.svg";
import qr_code from "/qr_code.png"
import bg from "/login_bg.svg"
import { Navigate } from "react-router-dom"
export default function Login() {
  const [goToDashboard, setGoToDashboard] = React.useState(false)

  if (goToDashboard) {
    return <Navigate to="/dashboard" />
  }
  return (
    <div className='login-container-page w-screen h-screen  bg-white text-white flex relative'>
      <div className='login-container flex px-5 py-4 h-full w-full  text-slate-300 md:h-1/2 md:w-1/2 max-md:rounded-none m-auto rounded-lg z-10'>
        <div className='flex flex-col md:basis-2/3 md:h-full md:px-5  basis-full'>
          <div className='mx-auto md:hidden'><img src={discordLogo} alt="" /></div>
          <div className='field-container  flex flex-col basis-3/4  md:basis-full '>
            <div className='basis-2/3 md:basis-full   flex flex-col  justify-evenly '>
              <h1 className='font-semibold text-2xl text-white mx-auto'> Welcome Back! </h1>
              <h3 className='md:hidden '> We are excited to see you again! </h3>
              <form action="" className='flex flex-col justify-around basis-2/3 md:h-full ' >
                <label htmlFor="Email" className='text-xs'> EMAIL OR PHONE NUMBER <span className='text-red-600'>*</span></label>
                <input type="Email" className='input text-sm py-5' autoFocus />
                <label htmlFor="Password" className='text-xs' >Password <span className='text-red-600'>*</span></label>
                <input type="Password" className='input text-sm py-5' />
                <span className='text-sm text-blue-400'>Forgot Your Password?</span>
                <button className='btn  bg-prime rounded-1  align-middle'
                  onClick={(e) => {
                    e.preventDefault()
                    setGoToDashboard(true)
                  }}

                > <span className='text-base font-bold text-white'>Log In</span></button>
              </form>
              <span className='text-sm text-slate-500'>Need an account? <span className='text-blue-400'> <a href="/register">Register</a> </span> </span>
            </div>
          </div>
        </div>
        <div className='max-sm:hidden qr-container  basis-1/2 flex flex-col text-center'>
          <div className='qr-image basis-2/3 m-auto  flex'>
            <img src={qr_code} alt="" className='my-auto' />
          </div>
          <div className='basis-1/3 w-2/3  m-auto'>
            <h1 className='text-2xl'>Log in with QR code</h1>
            <h3>Scan with the <span className='font-semibold'>Discord mobile app</span> to log in instantly.</h3>
          </div>
        </div>
      </div>
      <img className='absolute  z-0 h-full w-full' src={bg} alt="" />


    </div>
  )
}
