import React from 'react';
import Lottie from  "lottie-react";
import girl from "../LottieFiles/girl.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import laptop from '../images/laptop.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>BHUVANESHWARI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={girl} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
           I’m a 3rd-year Computer Science and Engineering student passionate about solving complex problems and building innovative solutions.<br></br><br></br>

With a solid foundation in Data Structures and Algorithms (DSA), I thrive on tackling coding challenges and developing efficient solutions. I am proficient in C, Python, and SQL  and I enjoy leveraging these skills to bring ideas to life.
<br></br><br></br>
As a budding web developer, I work with React to create responsive and dynamic web applications that provide excellent user experiences.<br></br><br></br> My journey is driven by continuous learning and a desire to make a positive impact through technology.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={laptop} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home