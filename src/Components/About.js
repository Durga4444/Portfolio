import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/aboutlogo.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>BHUVANESHWARI</b>.<br></br><br></br>
            I am a 3rd-year Computer Science and Engineering student with a strong passion for coding, problem-solving, and software development.<br></br><br></br> I enjoy exploring new technologies, writing clean and efficient code, and building projects that solve real-world problems.<br></br><br>
            </br>

With a growing interest in fields like web development, machine learning, and competitive programming, I am constantly learning and challenging myself to push my boundaries.<br></br><br></br> My journey in tech has been fueled by a curious mind and a desire to create impactful solutions.<br></br><br></br>

I believe in lifelong learning and thrive in collaborative environments where creativity and innovation meet.<br></br> <br></br>When I'm not coding, I enjoy reading about emerging technologies.
      
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='DSA' />
        <Skills skill='Python' />
        <Skills skill='C++' />
        <Skills skill='C' />
        <Skills skill='DBMS' />
        
        
      </div>
    </>
  )
}

export default About