import React from 'react'
import product from "../assets/image 7 (3).png" 
import small from "../assets/image 7 (4).png"

const Product = () => {
    const size=[1,2,3,4,5,6]
  return (
    <section>
        <img src={product} alt="" className='rounded-md block mr-auto ml-auto'/>
       <div className='flex justify-center gap-2 mt-3 mb-5'>
            <div className='border-solid border-2 bg-[#2C86B2] w-[40px] h-[12px] rounded-2xl'></div>
            <div className='border-solid border-2 bg-[#CDEEFE] w-[40px] h-[12px] rounded-2xl'></div>
            <div className='border-solid border-2 bg-[#CDEEFE] w-[40px] h-[12px] rounded-2xl'></div>
            <div className='border-solid border-2 bg-[#CDEEFE] w-[40px] h-[12px] rounded-2xl'></div>
       </div>

       <h1 className='text-[#4E3D67] font-[500] text-xl'>6 Similar Products</h1><br />
        <div className='grid grid-cols-6'>
        {
            size.map((index)=>(
                <img src={small} alt="" className='rounded-md' />
            ))
        }
        </div>
    </section>
  )
}

export default Product;