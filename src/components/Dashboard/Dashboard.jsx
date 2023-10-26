import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Server1 from './servers/Server1'
export default function Dashboard() {
  return (
    <div id='dashboard'>
      <div className='main-sidebar'>
        <div>dashboard</div>
        <div>
          server 1
        </div>
        <div>plus</div>
        <div>compass</div>
        <div>download</div>
      </div>
      <div className="dash-sidebar">dash-sidebar</div>
      <div className="main-dash">
        <div className="dash-nav">nav</div>
        {/* page based on navigation */}
        <Outlet/>
      </div>

      
    </div>
    
  )
}
