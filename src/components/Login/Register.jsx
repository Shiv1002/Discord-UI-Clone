import React from 'react'
import discordLogo from "/discord_main_logo.svg";
import bg from "/login_bg.svg"

export default function Register() {
  return (
    <div className='login-container-page w-screen h-screen  bg-white text-white flex relative'>
      <div className='login-container flex px-5 py-4 h-full w-full  text-slate-300 md:h-2/3 md:w-1/2 max-md:rounded-none m-auto rounded-lg z-10'>
        <div className='flex flex-col md:h-full md:px-5  basis-full'>
          <div className='mx-auto md:hidden'><img src={discordLogo} alt="" /></div>
          <div className='field-container  flex flex-col basis-3/4  md:basis-full justify-evenly'>
            <div className='basis-full   flex flex-col justify-evenly '>
              <h1 className='font-semibold text-2xl text-white mx-auto'> Create an account</h1>

              <form action="" className='flex flex-col justify-around basis-2/3 md:h-full '>
                <label htmlFor="Email" className='text-xs'> Email </label>
                <input type="Email" className='input text-sm py-5' autoFocus/>

                <label htmlFor="Email" className='text-xs'> Username</label>

                <input type="Email" className='input text-sm py-5' />

                <label htmlFor="Password" className='text-xs' >Password </label>
                <input type="Password" className='input text-sm py-5' />

                <button className='btn  bg-prime rounded-1  align-middle'> <span className='text-base font-bold text-white'>Continue</span></button>
              </form>
              <span className='text-sm text-blue-400'> <a href="/login">Already have an account?</a> </span>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute  z-0 h-full w-full' src={bg} alt="" />

    </div>
  )
}
