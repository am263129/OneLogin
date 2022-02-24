import React from 'react'
import IcoNotification from "../../assets/images/ico_notification.png"
import IcoNext from '../../assets/images/ico_next.png'
const Notification = () => {
  return (
    <div className='m-8 w-80 bg-white border rounded-md border-gray-100'>
      <div className='shadow-lg flex flex-col py-4 gap-3 divide-y'>
        <div className='px-4'>
          <p className='text-xs text-app-blue text-center'>Notification</p>
          <p className='text-black text-center'>Next wave: March 1 - 31st 2022</p>
        </div>
        <div className='pt-4'>
          <p className='px-5 py-3 border-t border-app-blue'>Latest notifications</p>
        </div>
        <div className='px-4 flex flex-col gap-3 py-3'>
          <div className='rounded-full bg-app-blue w-10 h-10 flex justify-center items-center'>
            <img src={IcoNotification} />
          </div>
          <div className='bg-gray-300 w-full px-6 py-3'>
            <p className='text-gray-600 text-sm'>No items found.</p>
          </div>
        </div>
        <div className='px-4 flex items-center gap-2 py-2 cursor-pointer'>
          <p className='text-app-blue'>View all</p>
          <img src={IcoNext} alt="next" className="w-6 transform translate-x-0 hover:translate-x-2 duration-200"/>
        </div>
      </div>

    </div>
  )
}

export default Notification