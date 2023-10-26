import React from 'react'

import justChillingImage from "/just_chiling_landing.svg"
import tinyStars from "/tiny_stars_landing.svg"

export default function Reliable_tech() {
  return (
    <div className="bg-gray-100 py-10 ">
        <div className="flex flex-col items-center w-3/4 mx-auto">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">RELIABLE TECH FOR STAYING CLOSE</h1>
          <p className="font-light">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>

        <div className="container-logo px-32 py-24 ">
          <img src={justChillingImage} alt="" />
        </div>

        <div className="flex flex-col justify-around mx-auto  items-center relative">
          <h1 className="text-2xl my-2 ">Ready to start your journey? 
          
          </h1>
          <button  className="btn btn-primary  my-2 text-white">Download for Windows</button>
          <img src={tinyStars} className="absolute -top-8 w-1/3" alt="" />
        </div>

      </div>
  )
}
