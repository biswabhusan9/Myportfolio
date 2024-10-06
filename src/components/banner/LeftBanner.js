import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaReact, FaInstagram } from 'react-icons/fa'
import { SiTailwindcss,SiFigma,SiJavascript } from 'react-icons/si'

function LeftBanner() {
    const [text]=useTypewriter({
        words:["Software Engineer.","FrontEnd Developer.","Software Developer"],
        Loop:true,
        typeSpeed:35,
        // deleteSpeed:10,
        delaySpeed:2000
    })
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi, I'm {' '}
                    <span className='text-designColor capitalize'>Biswabhusan Pradhan</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>{text}</span>
                    <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in
                </h2>
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
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Best skill on
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaReact/>
                    </span>
                    <span className='bannerIcon'>
                        <SiJavascript/>
                    </span>
                    <span className='bannerIcon'>
                        <SiTailwindcss/>
                    </span>
                </div>
                </div>
            </div>
        </div> 
  )
}

export default LeftBanner