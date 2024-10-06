import React from 'react'
import {logo} from "../../assets"
import { FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
        <div className='w-full h-full flex flex-col gap-8'>
          <div className='flex items-center'>
            <div><img className='h-14 w-14 rounded-full mr-[12px]' src={logo} alt='logo'/></div>
            <div><h3>Portfolio</h3></div>
          </div>
          <div className='flex gap-4'>
                    <a
                    href="https://www.instagram.com/chikupradhan75570/?next=%2F&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                >
                    <FaInstagram />
                </a>
                <span className='bannerIcon'>
                        <FaTwitter/>
                    </span>
                    <a
                    href="https://www.linkedin.com/in/biswabhusan-pradhan-187a15233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                >
                    <FaLinkedinIn />
                </a>
                </div>
        </div>
        <div className='w-full h-full'>
          <h3 className='text-xl uppercase text-designColor tracking-wider'>
          quick Link</h3>
          <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
            <a href='https://www.linkedin.com/in/biswabhusan-pradhan-187a15233/' target='_blank'>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              About<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            </a>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Blog<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
          </ul>
        </div>
        <div className='w-full h-full'>
          <h3 className='text-xl uppercase text-designColor tracking-wider'>
          resources</h3>
          <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              System Status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Terms of Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Over Right<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
          </ul>
        </div>
        <div className='w-full h-full'>
          <h3 className='text-xl uppercase text-designColor tracking-wider'>
          quick Link</h3>
          <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Documentation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              API Reference<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
            <li>
              <span className='w-full text-lg hover:text-designColor duration-300 relative group cursor-pointer'>
              Open Source<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300'></span></span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer