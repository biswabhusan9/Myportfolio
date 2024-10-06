import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

function Banner() {
  
  return (
    <section id='home' 
    className='w-full pt-10 pb-20 items-center gap-10 xl:gap-0 flex flex-col lgl:flex-row border-b-[1px] font-titleFont border-b-black'>
        <LeftBanner/>
        
        <RightBanner/>
        </section>
  )
}

export default Banner