import React from 'react'
import hangingOutEasyImage from "/hanging_out_easy_landing.svg"

export default function Haning_out_easy() {
  return (
    <div className="page-section-container flex w-full items-center bg-gray-100  ">
        <div className="basis-1/3 mx-auto px-5 ">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">Where hanging out is easy</h1>
          <p className=" font-light ">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
        </div>
        <div className="container-logo basis-1/2">
          <img src={hangingOutEasyImage} alt="" />
        </div>
      </div>
  )
}
