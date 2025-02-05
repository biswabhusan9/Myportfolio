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
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
      {/* <div className='w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex 
      items-center bg-gradient-to-r from-bodyColor to-[#202327] group
      hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
      duration-100
      '></div> */}
      <Card 
      title="Web Developer"
      des="A web developer builds and maintains websites, ensuring functionality, responsiveness, and a great user experience."
      icon={<FaBars/>}
      />
      <Card title="UX Design"
      des="UX Design enhances user experience by creating intuitive, user-friendly, and visually appealing interfaces."
      icon={<AiFillAppstore/>}
      />
      <Card title="Position"
      des="Position defines a role's responsibilities, requirements, and hierarchy within an organization or project."
      icon={<SiProgress/>}
      />
      <Card title="Design Strategy"
      des="Design Strategy aligns creative decisions with business goals to ensure effective and impactful solutions."
      icon={<MdWeb/>}
      />
      <Card title="Python Developer"
      des="Python Developer builds applications, automates tasks, and analyzes data using Python for various industries."
      icon={<SiAntdesign/>}
      />
      <Card title="Hosting Websites"
      des="Hosting Website stores and serves web content, ensuring accessibility, performance, and security for users."
      icon={<FaGlobe/>}
      />
      </div>
        </section>
  )
}

export default Features