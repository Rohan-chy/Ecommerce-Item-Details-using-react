import React from 'react'
import {BiSolidStar} from "react-icons/bi"
import {FiShare2} from "react-icons/fi"
import {FaRegHeart} from "react-icons/fa"

const Rating = () => {
  return (
    <main className='flex justify-between'>
        <div>
            <h1 className='text-[#4E3D67] font-[700] text-xl'>Boat Neck Blouse</h1>
            <p className='text-[#4E3D67] font-[700]'>Start from <span className='text-[#2C86B2] font-[700] text-xl'>₹640</span></p>
            <button className='bg-[#CDEEFE] text-[#2C86B2] px-2 rounded-2xl my-3'>Free Delivery</button>
            <div className='flex gap-2'>
               <div className='flex items-center bg-[#CDEEFE] w-[60px] p-1 rounded-2xl text-[#2C86B2] font-[700]'>
                    <BiSolidStar className=' text-xl'/>
                    <p>4.2</p>
                </div>
                
                    <p className='text-[#776B8A]'>(500+ ratings)</p>
                
               </div>
        </div>

        <div className='flex gap-5 text-[#2C86B2] font-[700] text-xl '>
            <FaRegHeart/>
            <FiShare2/>
        </div>
    </main>
  )
}

export default Rating;