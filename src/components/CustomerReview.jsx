import React from 'react'
import {BiSolidStar} from 'react-icons/bi'

const CustomerReview = () => {
    const size=[1,2,3]
  return (
    <section >
        <h1 className='text-[#2C86B2] font-[700] text-xl'>Review from customers</h1><br />
        {
           size.map((index)=>(
            < >
            <p className='text-[#4E3D67] font-[700] text-lg mb-2'>Alex</p>
        <div className='flex justify-between'>
            <p className='text-[#776B8A]'>Aug 8, 2022</p>
            <div className='text-[#4E3D67] font-[700] flex items-center gap-2'>
                <BiSolidStar/>
                <p>3.5</p>
            </div>
        </div>
        <p className='text-[#776B8A]'>It was really awesome really buy it.</p>
        <div className=' w-full my-3 border-solid border-[#4E3D67] border-2 ...'></div>
            </>
           )) 
        }
    </section>
  )
}

export default CustomerReview;