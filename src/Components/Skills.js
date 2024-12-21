import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";

import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { DiJavascript1, DiCode } from "react-icons/di";
import { SiCplusplus, SiC, SiAlgorithms } from "react-icons/si";
import { AiOutlineNodeIndex } from "react-icons/ai";

const Skills = ({skill}) => {
    const icon = {
        
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Python : <FaPython/>,
        'C++':<CgCPlusPlus/>,
        C:<SiC/>,
        DSA: <AiOutlineNodeIndex/>,
        HTML :<FaHtml5/>,
        CSS:<FaCss3Alt/>,
        DBMS:<FaDatabase/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
