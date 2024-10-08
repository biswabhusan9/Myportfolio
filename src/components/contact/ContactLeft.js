import React from 'react'
import { FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa'
import { contactImg } from '../../assets'


const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 
            rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img className='w-full h-64 object-cover rounded-lg mb-2'
                src={contactImg} alt='contactImg'/>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl font-bold text-white'>Biswabhusan Pradhan</h3>
                    <p className='text-lg font-normal text-gray-400'>Software Developer</p>
                    <p className='text-base text-gray-400 tracking-wide'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    <p className='text-base text-gray-400 flex items-center gap-2'>
                        Phone: <span className='text-lightText'>+91 9348945471</span>
                    </p>
                    <p className='text-base text-gray-400 flex items-center gap-2'>
                        Email:{""}
                        <span className='text-lightText'>biswabhusanp121@gmail.com</span>
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                
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
            </div>
  )
}

export default ContactLeft