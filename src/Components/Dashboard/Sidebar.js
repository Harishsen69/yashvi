import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd';

function Sidebar() {
  const navigate = useNavigate()

  const handleOut = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div style={{ border: '2px solid red', width: '200px', height: '99vh' }}>
      <li><Link to='/dashboard'>Attendance</Link></li>
      <li><Link to='/dashboard/leave'>Leave</Link></li>
      <li><Link to='/dashboard/salary'>Salary</Link></li>
      <li><Link to='/dashboard/reports'>Reports</Link></li>
      <li><Button onClick={handleOut}>Logout</Button></li>
    </div>
  )
}

export default Sidebar