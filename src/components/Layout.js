import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex'>
      <div className='w-2/12'>
        <Sidebar />
      </div>
      <div className='w-10/12'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout