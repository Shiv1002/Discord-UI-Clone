import React from 'react'
import inviteOnlyImage from "/invite_only_landing.svg"


export default function Invite_only() {
  return (
    <div className="page-section-container flex w-full items-center">
        <div className="container-logo basis-1/2 ">
          <img className="" src={inviteOnlyImage} alt="" />
        </div>
        <div className="basis-1/3 mx-auto px-5 ">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight" >Create an invite-only place where you belong</h1>
          <p className="text-xl font-light ">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
      </div>
  )
}
