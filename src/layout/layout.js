import React from 'react'
import { Helmet } from "react-helmet";
import NavBar from './navbar';
import SideBar from './sidebar';

const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  pageInfo
}) => {
  return (
    <div className='flex min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SideBar />
      <main className="w-full flex-1 ">
        <NavBar pageInfo={pageInfo} />
        {children}
      </main>
    </div>
  )
}

export default Layout