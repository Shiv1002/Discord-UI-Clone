import React from 'react'
import { useNavigate } from 'react-router-dom';
import discordLogo from "/discord_main_logo.svg";


export default function Navbar() {
  const navigate = useNavigate()
  return (
    <header className='bg-[#404eed] overflow-hidden'>
        <nav className="navbar h-16 flex justify-around items-center bg-transparent text-white text-sm font-medium ">
          <div>
            <img src={discordLogo} alt="discord" />
          </div>
          <div className="  w-1/2 lg:w-1/3 flex justify-between list-none">
            <li><a href="">Download</a></li>
            <li><a href="">Nitro</a></li>
            <li><a href="">Safety</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
          </div>
          <div>
            <button className="btn bg-white  text-black" 
            onClick={()=>{
              navigate("/login")
            }}>Login</button>
          </div>
        </nav>
    </header>
  )
}
