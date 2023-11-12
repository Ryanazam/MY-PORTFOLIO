import React from 'react'
import html from '../Components/Assests/photo/HTML.png'
import css from '../Components/Assests/photo/CSS.png'
import js from '../Components/Assests/photo/Javascript.svg'
import tailwind from  '../Components/Assests/photo/Tailwind.png'
import redux from './Assests/photo/Redux.svg'
import react from './Assests/photo/React.png'
import mongoDb from './Assests/photo/MongoDB.svg'
import node from './Assests/photo/NodeJs.svg'
import vercel from './Assests/photo/Vercel.svg'
import express from './Assests/photo/Express.png'
import git from './Assests/photo/Git.svg'
import github from './Assests/photo/Github.svg'
import material     from './Assests/photo/MaterialUI.svg'
import postman from './Assests/photo/postman.png'

const Skill = () => {
  return (

    <div class="container skills-container" id="skills">
        
    <div class="skill-fade-text">SKILLS</div>

    <div class="skills-container-left">

      <h2 class="skills-heading">

        <span class="caps">M</span>e and

        <br/>
    
        MyTech Stack
    
      </h2>
    
      <div class="skills-subheading">

       <p> Hi Everyone My name is Ryan azam I am a Full Stack MERN
        Developer I have been working for last 2 year  as a freelancer.
        <br/>
         I have excellent problem-solving skills and ability to perform well in team. Passionate about coding and
always Excited to learn new Skills and Technology.

        
      </p>

      </div>
   
    
    </div>


    <div class="skills-container-right">
      <img src={html} class="skills-logo"/>
      <img src={css} alt="" class="skills-logo"/>
      <img src={js} alt="" class="skills-logo"/>

      <img src={vercel} alt="" class="skills-logo"/>
      <img src={react} alt="" class="skills-logo"/>
      <img src={node} alt="" class="skills-logo"/>
      <img src={mongoDb} alt=""class="skills-logo" />
      {/* <!-- <img src="./photo/Verel.svg" alt="" class="skills-logo"> --> */}
      <img src={tailwind} alt="" class="skills-logo"/>
      <img src={redux} alt=""class="skills-logo" />
      {/* <!-- <img src="./photo/Saas.svg" class="skills-logo" > --> */}
      <img src={express} alt=""class="skills-logo" />
      {/* <!-- <img src="./photo/K8s.svg" alt="" class="skills-logo"> -->
      <!-- <img src="./photo/Docker.svg" alt="" class="skills-logo"> -->
      <!-- <img src="./photo/ChartJs.svg" alt=""class="skills-logo" > -->
      <!-- <img src="./photo/Bash.svg" alt="" class="skills-logo"> --> */}
      <img src={git} alt=""class="skills-logo" />
      <img src={github} alt="" class="skills-logo"/>
      <img src={material} alt="" class="skills-logo"/>
      <img src={postman} alt="" class="skills-logo"/>
   
    </div>


     </div>

  )
}

export default Skill