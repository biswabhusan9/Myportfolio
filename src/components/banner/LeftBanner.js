import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiJavascript } from 'react-icons/si'

function LeftBanner() {
    const [text] = useTypewriter({
        words: ["React.js Developer.", "Software Developer", "FrontEnd Developer."],
        loop: true,
        typeSpeed: 35,
        deleteSpeed: 25,
        delaySpeed: 2000
    })
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white break-all'>
                    Hi, I'm {' '}
                    <span className='text-designColor capitalize'>
                        Biswabhusan Pradhan
                    </span>
                </h1>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-sm sm:text-base font-bodyFont leading-6 tracking-wide'>
                I am a Frontend Developer skilled in React 19.0.0, JavaScript, TypeScript, and modern web technologies. I specialize in building responsive web applications, integrating RESTful APIs, and working with Agile methodologies, ensuring seamless user experiences and efficient project execution. 
                </p>

                {/* Download CV Button */}
                <a 
                    href="https://drive.google.com/file/d/1mevcfEnJ0S-dFXU0xQj-ZUCGidrTa-7C/view?usp=sharing" 
                    download="Biswabhusan_Pradhan_CV.pdf"
                    className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:from-red-500 hover:to-pink-500 transition duration-300 text-center w-max"
                >
                    Download CV
                </a>
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
                        <a
                            href="https://twitter.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bannerIcon"
                        >
                            <FaTwitter />
                        </a>
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
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiJavascript />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner