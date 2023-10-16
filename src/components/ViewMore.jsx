import React from 'react'
import {FiShare2} from "react-icons/fi"
import love from "../assets/Wishlist Web.png"
import star from "../assets/Group 1711.png"
import "../styles/ViewMore.css"

const ViewMore = () => {
    const size=[1,2,3,4,5,6]
  return (
    <>
        <section className='mt-10 mb-20'>
        <h1 className='text-[#2C86B2] font-[700] text-xl'>View more</h1><br />
        <h1 className='font-[700] text-xl #4E3D67'>People Also Viewed</h1><br />

        <div className='grid grid-cols-2'>
        {
                size.map((index)=>(
                    <div className='w-[150px] mb-10 shadow-xl rounded-md'>
                        <div className='views'>
                            <img src={love} alt="" className='w-[30px] h-[30px]'/>
                        </div>
                        <div className='flex  items-center gap-3 font-[700] mb-3'>
                            <h1 className='text-[#4E3D67] '>Bot neck blouse</h1>
                            <FiShare2 className='text-[#2C86B2]'/>
                        </div>
                        <p className='text-[#4E3D67] font-[500] text-lg'>₹350 onwards</p>

                        <div className='flex items-center justify-evenly  my-2'>
                            <img src={star} alt="" className='w-[20px] h-[20px]'/>
                            <p className='text-[#4E3D67] text-[12px]'>4.2 (50+)</p>
                            <p className='text-[#2C86B2] text-[12px]'>Free delivery</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </section>

    <div className='flex gap-5 shadow-xl'>
        <button className='text-[#2C86B2] border border-[#2C86B2] font-[700] w-[150px] p-2 rounded-md'>Buy Default Style</button>
        <button className='bg-[#2C86B2] text-white font-[700] w-[150px] p-2 rounded-md'>Customize</button>
    </div>
    </>
  )
}

export default ViewMore;