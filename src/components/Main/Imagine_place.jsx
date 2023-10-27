import React from 'react'
import landing_left from "/left_bg_landing_header.svg"
import landing_right from "/right_bg_landing_header.svg"
import center_bg_landing_header from "/center_bg_landing_header.svg"
import download_icon from "/download_icon.png"

export default function Imagine_place() {
  return (
    <div id='imagine-a-place' className="page-section-container relative bg-[#404eed] h-2/3">
      <div className=" lg:mx-auto max-lg:ps-8 p-5 lg:w-4/5 sm:w-full lg:text-center flex flex-col h-full   relative z-50  ">
        <div className="lg:mx-auto md:w-3/4 flex flex-col justify-evenly h-1/2  text-white ">
          <h1 className="md:text-6xl sm:text-5xl header-title font-extrabold   mt-auto pb-10">IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        </div>
        <div className="lg:flex-row max-md:flex-row  flex flex-col justify-center py-5">
          <button className="btn flex justify-center w-fit bg-white text-black mx-4  hover:text-[#404eed] my-3">
            <img src={download_icon} alt="" className='h-8 px-3 ' />
            <span>Download for MAC</span>
          </button>
          <button className="btn  w-fit my-3 bg-slate-800 text-white mx-4">Open Discord in your browser</button>
        </div>
      </div>
      <div className="w-full flex justify-between  items-end absolute bottom-0 z-20">
        <img className="h-96 mr-5   md:-translate-x-full lg:-translate-x-1/3 " src={landing_left} alt="discord" />
        <img className="h-96 ml-5 sm:translate-x-full md:-translate-x-2/3 lg:translate-x-1/3" src={landing_right} alt="discord" />
      </div>
      <img className="absolute bottom-0 h-96" src={center_bg_landing_header} alt="discord" />
    </div>
  )
}
