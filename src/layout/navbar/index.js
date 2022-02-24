import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import IcoNotif from '../../assets/images/ico_notif.png'
import IcoNotifBlue from '../../assets/images/ico_notif_blue.png'
import { HorizontalMenuList } from '../menu'
import Notification from './notification'
const NavBar = (props) => {
  const { pageInfo } = props
  const navigate = useNavigate()
  const location = useLocation()



  const BtnNotif = () => {
    const [hovered, setHovered] = useState(false)
    const [expand, setExpand] = useState(false)
    return (
      <div className='relative'>
        <button className='w-9 h-9 p-1' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setExpand(!expand)}>
          <img src={hovered ? IcoNotifBlue : IcoNotif} alt="notification" />
        </button>
        <div className='absolute right-0'>
          {expand && <Notification />}
        </div>
      </div>
    )
  }

  const HorizontalMenuItem = (props) => {
    const { menu } = props
    const handleNavigate = (path) => {
      navigate(path)
    }

    return (
      <div onClick={() => { handleNavigate(menu.path) }} className={`cursor-pointer flex items-center gap-2 py-3 ${location.pathname === menu.path && "border-b-2 border-app-blue"}`}>
        <img src={menu.icon} alt={menu.title} className="w-6 h-6  sm:w-7 sm:h-7" />
        <p className='whitespace-nowrap text-xs md:text-sm '>{menu.title}</p>
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-col divide-y'>
        <div className='flex items-center justify-end px-4 py-2'>
          <BtnNotif />
        </div>
        {location.pathname !== "/about" && <div className='flex flex-col'>
          <div className='flex flex-col px-10 pt-8 pb-3 h-32'>
            <h1 className='text-3xl font-semibold'>
              {pageInfo.name}
            </h1>
            <p className='py-2 text-gray-600'>
              {pageInfo.desc}
            </p>
          </div>
          <div className='flex gap-4 px-10 flex-wrap'>
            {HorizontalMenuList.map((menu, idx) => (
              <HorizontalMenuItem menu={menu} key={idx} />
            ))}
          </div>
        </div>}
      </div>
    </>
  )
}

export default NavBar