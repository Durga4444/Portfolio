import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MangoLeafDiseaseDetectionDesc: "The Mango Leaf Disease Detection project leverages a Convolutional Neural Network (CNN) to accurately identify and classify diseases in mango leaves based on image inputs. This aids in early detection, enabling timely interventions to improve crop health and yield.",
    MangoLeafDiseaseDetectionGithub : "https://github.com/Durga4444/Mango-Leaf-Disease-Detector",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    ZomatoFrontEndDesc : "The Zomato Clone is a responsive web application built with React.js, featuring dynamic tab navigation to showcase restaurant categories. It highlights frontend skills with a focus on clean design and smooth user interaction.",
    ZomatoFrontEndGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    GeminiCloneDesc:"The Gemini Clone is a responsive React.js application replicating the UI of the Gemini platform, showcasing interactive design and efficient state management. It highlights skills in building seamless user interfaces with modern frontend technologies.",
    GeminiCloneGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    LoanCalculatorDesc:"The Loan Calculator is a simple yet efficient tool built to calculate loan payments, interest, and tenure. It demonstrates core programming skills in creating interactive and accurate financial calculators.",
    LoanCalculatorGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",

    TodoListDesc:"The To-Do List is a user-friendly application designed for efficient task management. It allows users to add, edit, and delete tasks, showcasing fundamental programming and UI design skills.",
    TodoListGithub:""
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox