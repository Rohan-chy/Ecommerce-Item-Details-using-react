import React from 'react'
import Button from '../Reuse/Button';

const Size = () => {
  return (
    <main className='w-[360px] mx-auto my-10'>
        <h1 className='text-[#4E3D67] font-[700] text-xl mb-2'>Size</h1>
        <Button size="XS"/>
        <Button size="S"/>
        <Button size="M"/>
        <Button size="XL"/>
        <Button size="XXL"/>
    </main>
  )
}

export default Size;