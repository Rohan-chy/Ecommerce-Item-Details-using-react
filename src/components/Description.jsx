import React from 'react'

const Description = () => {
  return (
    <section className='w-[360px] mx-auto mb-10'>
        <h1 className='text-[#4E3D67] font-[700] text-xl '>Fabric Details:</h1>
        <hr className='w-full h-[2px] border border-[#D9D9D9] my-2'/>

        <div className='text-[#4E3D67] font-[500]'>
            <p>Fabric: 100% Giza Cotton</p>
            <p>Count: 60 Count</p>
            <p>Weave/Pattern: Plain</p>
            <p>Care: Machine Wash, Mild Iron</p>
        </div><br />

        <h1 className='text-[#4E3D67] font-[700] text-xl '>Zil Default Style:</h1>
        <hr className='w-full h-[2px] border border-[#D9D9D9] my-2'/>
        
        <div className='text-[#4E3D67] font-[500]'>
            <p>Color: Red</p>
            <p>Note: Medium Weight Fully Custom Sizing</p>
        </div>
    </section>
  )
}

export default Description;