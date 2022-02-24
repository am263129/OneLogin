import React, { memo, useEffect, useState } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import ImgWhiteLogo from '../../assets/images/logo_white.png'
import IcoHelp from '../../assets/images/ico_help.png'
import IcoReduce from '../../assets/images/ico_reduce.png'
import IcoLogout from '../../assets/images/ico_logout.png'
import IcoLogo from "../../assets/images/icon.png"
import { categoryList } from '../menu'
import useWindowDimensions from '../../util/dimention'

const SideBar = () => {
  const [expand, setExpand] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)
  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleLogout = () => {
    // something to logout
    navigate("/")
  }

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if(width<648 && expand){
      setExpand(false)
    }
  }, [width])

  const Navigator = memo((props) => {
    const { menu } = props
    return (
      <div onClick={() => handleNavigate(menu.path)} className={`flex gap-2 ${location.pathname === menu.path && "bg-app-blue"} text-white  py-2 items-center cursor-pointer ${expand ? "flex-row px-5" : "flex-col px-1"} hover:bg-gray-100 hover:bg-opacity-20`}>
        <img src={menu.icon} alt={menu.title} className={`w-6 h-6 `} />
        <p className={`${expand ? "text-sm" : "text-xs"} ${!expand && "text-center"} w-11/12 truncate`}>{menu.title}</p>
      </div>
    )
  })

  return (
    <div className={`bg-app-primary min-h-screen flex flex-col divide-y divide-gray-700 transform ${expand ? "w-64 " : "w-16"}`}>
      <div onClick={() => handleNavigate("/")} className={`cursor-pointer ${expand ? "w-3/5" : "w-full"} px-5 py-3`} >
        <img src={expand ? ImgWhiteLogo : IcoLogo} alt="logo" />
      </div>
      <div className='flex-1 flex flex-col py-7.5'>
        {categoryList.map((category, idx) => (
          <div className='flex flex-col' key={idx}>
            <p className={`text-white  my-2.5 truncate ${expand ? "text-sm px-5" : "text-xs px-1"}`}>{category.category}</p>
            <div className='flex flex-col'>
              {category.menus.map((menu, index) => (
                <Navigator menu={menu} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        <Navigator menu={{
          icon: IcoHelp,
          title: `About ${expand ? "BrandIndex" : ""}`,
          path: "/about"
        }} />
        <div>
          <div onClick={() => handleLogout()} className={`flex gap-2 text-white px-5 py-2 cursor-pointer  items-center ${expand ? "flex-row px-5" : "flex-col px-1"}`}>
            <img src={IcoLogout} alt={"logout"} className="w-6 h-6" />
            <p className='text-sm'>Logout</p>
          </div>
        </div>
        <button onClick={() => { setExpand(!expand) }} className="flex justify-center items-center py-2 bg-app-primary-100 hover:bg-app-primary-light">
          <img src={IcoReduce} alt="reduce" className={`w-6 h-6 ${expand ? "rotate-0" : "rotate-180"} duration-100`} />
        </button>
      </div>
    </div>
  )
}


export default SideBar