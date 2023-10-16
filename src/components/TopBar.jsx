import React from 'react'
import {IoMdAlarm} from "react-icons/io"
import {FiBluetooth} from "react-icons/fi"
import {AiOutlineWifi,AiOutlineHeart} from "react-icons/ai"
import {GiNetworkBars} from "react-icons/gi"
import {PiBatteryFullThin} from "react-icons/pi"
import {RiShoppingBag3Fill} from "react-icons/ri"
import {FaArrowLeft} from "react-icons/fa"

const TopBar = () => {
  return (
    <header className=' p-4 shadow-xl'>
        <div className='flex justify-between text-[#4E3D67] font-[500] mb-5'>
            <h1 className=''>5:13 PM</h1>
            <div className='flex gap-3 '>
                <IoMdAlarm/>
                <FiBluetooth/>
                <AiOutlineWifi/>
                <GiNetworkBars/>
                <PiBatteryFullThin />
            </div>
        </div>

        <div className='flex justify-between'>
            <FaArrowLeft className='text-[#2C86B2] font-bold text-xl'/>
            <div className='flex gap-5 text-[#4E3D67] text-xl font-[700]'>
                <AiOutlineHeart/>
                <RiShoppingBag3Fill/>
            </div>
        </div>
    </header>
  )
}

export default TopBar;