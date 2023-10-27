import React from 'react'
import { Outlet, Route, Link } from 'react-router-dom'
import logo from '/discord_mini_icon.svg'
import new_line from '/new_line.png'
import plus_icon from '/plus_icon.svg'
import download_icon from '/download_icon.png'
export default function Dashboard() {
  return (
    <div id='dashboard' className='flex h-screen'>
      <div className='main-sidebar flex flex-col  p-3 py-4 bg-black h-full'>
        <Link  to="/dashboard/friends/online" className=''>
        <img src={logo} alt="" className='p-5 rounded-2xl bg-[#404eed] '   />
        </Link>
        <Link to="servers-1">
        <img src={new_line} alt=""  className='rounded-xl' />
        </Link>
        <Link to="plus"  >
        <img  src={plus_icon} alt="" className='dash-nav-circle'  />
        </Link>
        <Link to="download">
          <img src={download_icon} alt="" className='dash-nav-circle rounded-full '  /></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>

  )
}
