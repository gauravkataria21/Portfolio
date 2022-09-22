import React from 'react'
import "./skill.css"
import js from "../../img/js.png";
import react from "../../img/react.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import node from "../../img/nodejs.png";
import bootstrap from "../../img/bootstrap.png";
import github from "../../img/github.png";
import mongo from "../../img/mongo.png";



const Skills = () => {
  return (
    <div className="skill" >
      <h1 className='heading-skill'>TECHNICAL SKILLS</h1>
      <div className='skill-section'>

        <img src={html} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={css} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={bootstrap} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={js} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={react} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={node} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={github} alt="html" className='skill-img' height={100} width={100
      } />
        <img src={mongo} alt="html" className='skill-img' height={100} width={100
      } />
        
      </div>
        

    </div>
  )
}

export default Skills