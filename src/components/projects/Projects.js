import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import {projectOne,projectTwo,projectThree,projectFour} from "../../assets/index"

const Projects = () => {
  return (
    <section id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex justify-center items-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND YOUR FEEDBACK"
        des="My Project"
        />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectsCard title="SOCIAL MEDIA APP"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectOne}
            />
            <ProjectsCard title="Portfolio Website"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectTwo}
            />
            <ProjectsCard title="E-commerce Website"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectThree}
            />
            <ProjectsCard title="Chatting App"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectFour}
            />
            <ProjectsCard title="Android app"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectOne}
            />
            <ProjectsCard
            title="Chatting App"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            src={projectTwo}
            />
        </div>
    </section>
  )
}

export default Projects