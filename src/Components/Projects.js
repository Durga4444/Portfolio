import React from 'react';
import ProjectBox from './ProjectBox';
import second from '../images/second.png';

import first from '../images/first.png';
import Gemini from '../images/Gemini.png';

import loan from '../images/loan.png';
import todo from '../images/todo.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
       
        <ProjectBox projectPhoto={second} projectName="MangoLeafDiseaseDetection" />
        <ProjectBox projectPhoto={first} projectName="ZomatoFrontEnd" />
        <ProjectBox projectPhoto={Gemini} projectName="GeminiClone" />
        <ProjectBox projectPhoto={loan} projectName="LoanCalculator" />
        <ProjectBox projectPhoto={todo} projectName="TodoList" />


      </div>

    </div>
  )
}

export default Projects