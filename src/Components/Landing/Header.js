import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/service'>Service</Link></li>
       <li><Link to='/login'>Login</Link></li>
    </div>
  )
}

export default Header