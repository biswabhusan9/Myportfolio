import React from 'react'
import Slider from "react-slick";
import Title from '../layouts/Title'
import { testimonialOne } from '../../assets';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section id='resume'className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title title="WHAT CLIENTS SAY" des="Testimonial"/>
        </div>
        <div className='max-w-6xl mx-auto '>
        <Slider {...settings} >
      <div className='w-full'>
        <div className='w-full h-[500px] flex justify-between '>
            <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'></div>
            <div className='w-[60%] h-full border'></div>
        </div>
      </div>
      
    </Slider>
        </div>
    </section>
  )
}

export default Testimonial