import React from 'react'
import { Outlet, Route, Link } from 'react-router-dom'
import Server1 from './servers/Server1'
export default function Dashboard() {
  return (
    <div id='dashboard'>
      <div className='main-sidebar'>
        <div> <Link to="/dashboard/friends"> dashboard</Link> </div>
        <div id='servers'>
          <Link to="servers-1">Servers</Link>
        </div>
        <div><Link to="plus" >plus</Link></div>
        <div><Link to="compass"> compass </Link></div>
        <div><Link to="download">download</Link></div>
      </div>
      
      <Outlet />


    </div>

  )
}
