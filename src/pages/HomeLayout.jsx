import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/utils/header/Header'

const HomeLayout = () => {

  return (
    <div>
      <Header/>

      {<Outlet/>}
      {/* <footer>Footer</footer> */}
    </div>
  )
}

export default HomeLayout
