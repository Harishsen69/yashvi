import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function Landing() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <FloatingWhatsApp phoneNumber="8770004155" accountName="Bhawesh Abhanpur" avatar="https://tse4.mm.bing.net/th/id/OIP.KOOipupW_5_J2Yv5CgFH6wHaEK?pid=Api&h=220&P=0" darkMode="True"/>
    </div>
  )
}

export default Landing