import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index"

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND YOUR FEEDBACK" des="My Project" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
      <ProjectsCard
          title="QuicMed"
          des="A smart medicine app enabling easy browsing, quick ordering, and reliable delivery for everyday healthcare needs."
          src={projectTwo}
          githubLink="https://github.com/biswabhusan9/medstore-frontend"
        />
        <ProjectsCard
          title="Admin Dashboard"
          des="An admin dashboard streamlines data management, analytics, and user control, enhancing efficiency and decision-making."
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7LNbGBWNLujZxdG1-YPvFcY52tiCX_pKng&s"
          githubLink="https://github.com/biswabhusan9/medstore-admin"  // Add your GitHub link here
        />
      <ProjectsCard
          title="QuicKart"
          des="A modern shopping app offering seamless browsing, secure checkout, and personalized experiences for everyday online shoppers."
          src={projectThree}
          githubLink="https://github.com/biswabhusan9/quickart-frontend"
        />
        <ProjectsCard
          title="Practice Management"
          des="Practice management digitizes data storage, reducing offline records and helping CAs streamline operations, compliance, and CM."
          src={projectTwo}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="A portfolio website showcases skills, projects, and experience, creating opportunities and professional connections."
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZWQlo8v2szeR55CNOTMHZHTirPtsHEU2Qg&s"
          githubLink="https://github.com/biswabhusan9/Myportfolio"
        />
        <ProjectsCard
          title="Snapchain"
          des="Snapchain is a social media app that connects users through shared moments, offering features for posting and engaging."
          src={projectFour}
        />
        {/* <ProjectsCard
          title="Client-Connect"
          des="Client Connect streamlines communication, enhances collaboration, and simplifies management for businesses."
          src={projectOne}
          githubLink="https://github.com/biswabhusan9/client-connect"
        /> */}
        
      </div>
    </section>
  )
}

export default Projects
