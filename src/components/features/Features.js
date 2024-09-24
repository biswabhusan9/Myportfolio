import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaBars, FaGlobe } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'
import { AiFillAppstore } from 'react-icons/ai'

function Features() {
  return (
    <section id='features' 
    className='w-full  py-20  border-b-[1px] border-b-black'>
      <Title title="Features" des="What I Do"/>
      <div className='grid grid-cols-3 gap-20'>
      {/* <div className='w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex 
      items-center bg-gradient-to-r from-bodyColor to-[#202327] group
      hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
      duration-100
      '></div> */}
      <Card 
      title="Business Stratagy"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<FaBars/>}
      />
      <Card title="App Developer"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<AiFillAppstore/>}
      />
      <Card title="Position"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<SiProgress/>}
      />
      <Card title="Web Developer"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<MdWeb/>}
      />
      <Card title="UX Design"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<SiAntdesign/>}
      />
      <Card title="Hosting Websites"
      des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      icon={<FaGlobe/>}
      />
      </div>
        </section>
  )
}

export default Features