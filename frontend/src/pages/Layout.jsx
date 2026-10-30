import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className="layoutPageContainer">
        <Navbar/>
        <Outlet/>
    </section>
  )
}

export default Layout