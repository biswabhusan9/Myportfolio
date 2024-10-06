import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}}
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
    {/* Part one */}
        <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2017 - 2024</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard title="Btech in Computer Science"
          subTitle="Nalanda Institute of Technology , Bhubaneswar (2020 - 24)"
          result="8.0/10"
          des="The training provided by Institute in order to prepare people to work 
          in various sectors of the economy or areas of culture."
          />
          <ResumeCard
          title="PCM-Council of Higher Secondary Education"
          subTitle="A.D. Higher Secondary School, Brahmagiri (2019 - 20)"
          result="6.0/10"
          des="Teaches critical problem-solving, analytical thinking, and foundational knowledge in science and math. It also builds discipline and resilience required for tackling complex challenges."
          />
          <ResumeCard
          title="SSC - Board of Secondary Education"
          subTitle="Brundaban High School , Rahadmall (1017-18)"
          result="6.5/10"
          des="Students with basic academic knowledge across various subjects and instills important life skills like discipline, time management, and responsibility. It serves as a foundation for higher education and career planning."
          />
        </div>
        </div>
      {/* Part two */}
        <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
          Jan 2024 till date
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard title="Software Engineer"
          subTitle="KreativeTimebox - (Jan 2024 - Present)"
          result="Hyderabad"
          des="KreativeTimebox hiring process is an important part of our culture.
          Kreativeans care deeply about there teams and the people who make them up."
          />
          {/* <ResumeCard
          title="PCM-Council of Higher Secondary Education"
          subTitle="A.D. Higher Secondary School, Brahmagiri (2019 - 20)"
          result="6.0/10"
          des="Teaches critical problem-solving, analytical thinking, and foundational knowledge in science and math. It also builds discipline and resilience required for tackling complex challenges."
          /> */}
          {/* <ResumeCard
          title="SSC - Board of Secondary Education"
          subTitle="Brundaban High School , Rahadmall (1017-18)"
          result="6.5/10"
          des="Students with basic academic knowledge across various subjects and instills important life skills like discipline, time management, and responsibility. It serves as a foundation for higher education and career planning."
          /> */}
        
        </div>
        </div>
        </motion.div>
  )
}

export default Education