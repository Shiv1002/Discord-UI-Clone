import React from 'react'

import fandomImage from "/fandom_landing.svg"

export default function Few_to_fandom() {
  return (
    <div className="page-section-container flex w-full items-center ">
        <div className="container-logo basis-1/2">
          <img src={fandomImage} alt="" />
        </div>
        <div className="basis-1/3 mx-auto px-5 ">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">From few to a fandom</h1>
          <p className="font-light ">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
        </div>
      </div>
  )
}
