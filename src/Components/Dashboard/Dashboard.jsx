import React from 'react'
import SideBar from './Sidebar';
import {Outlet} from 'react-router-dom'
function Dashboard() {
  return (
    <div style={{display:'flex'}}>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard