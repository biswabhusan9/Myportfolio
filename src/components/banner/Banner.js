import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

function Banner() {
  
  return (
    <section id='home' 
    className='w-full pt-10 pb-20 py-20 items-center flex border-b-[1px] border-b-black'>
        <LeftBanner/>
        
        <RightBanner/>
        </section>
  )
}

export default Banner