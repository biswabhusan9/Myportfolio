import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from './ResumeCard'
// import {motion} from "framer-motion"

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:0.5}}}
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
    <div className='w-full lgl:w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
      <h2 className='text-4xl font-bold'>Development Skill</h2>
    </div>
    <div className='className="mt-14 w-full flex flex-col gap-6'>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>react</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>JavaScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>html 5</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>css 3</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>tailwind css</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>json</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>typescript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
    </div>
    </div>


    <div className='w-full lgl:w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>
      Features
      </p>
      <h2 className='text-3xl md:text-4xl font-bold'>Other Skill</h2>
    </div>
    <div className='className="mt-14 w-full flex flex-col gap-6'>

    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>python</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>c</p>
        <span className='w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>90%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>core java</p>
        <span className='w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>90%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>dsa</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>sql</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>git</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span initial={{x:"-100%",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
           to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>100%</span>
           </motion.span>
        </span>
      </div>


    </div>
    
    </div>
    </motion.div>
  )
}

export default Skills