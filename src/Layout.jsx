import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //Isme react-router-dom is wajah se nesting ki jaa sakti hai by using Outlet

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout