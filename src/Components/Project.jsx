import React from 'react'
import {VscGithub} from 'react-icons/vsc'


const Project = () => {
  return (
    <div className="project-section" id="projects">

    <h2 className="page-header">Projects</h2>
    <div className="project-container">
      <div className="project-card" id="project1">
        <div className="project-number project-number-right">01</div>
        <div className="project-content project-content-left">
         
        <h2 className="project-heading">SHOPPER WEBSITE</h2>
        <p className="project-subHeading">It is a E-commerce website
                         which provide you variety of Product and Most effective managemnt   </p>
          <div className="btn-grp">
          <a href="https://e-commerce-ryan.netlify.app/" target='_blank'>
          <button className="btn-pink btn-project">Explore Website</button>
        </a>
          <a href="https://github.com/Ryanazam/E-commerce-website.git">
                <VscGithub color='white' size={35} className='gitu'></VscGithub>
          </a>
         
        
        </div>


        </div>

      </div>
      <div className="project-card" id="project2">
        <div className="project-number project-number-left">02</div>
        <div className="project-content project-content-right" >
        
          <h2 className="project-heading">Study Notion</h2>
          <p className="prject-subheading"> StudyNotion is a fully functional ed-tech platform that enables users to create, consume,
            and rate educational content </p>
          <div className="btn-group">
            <a href="https://studynotion-frontend.vercel.app/">
            <button className="btn-pink btn-project">Explore Website</button>
          </a>
            <a href="https://github.com/Ryanazam/study-notion-using-MERN-STACK.git">
            <VscGithub color='white' size={35} className='gitu'></VscGithub>
            </a>
           
          </div>
          
        </div>

      </div>
        
      <div className="project-card" id="project3">
        <div className="project-number project-number-right">03</div>
        <div className="project-content project-content-left">
        
          <h2 className="project-heading">Random GIFS</h2>
          <p className="prject-subheading"> Random GIfs is a web application developed using React, designed to provide users for generate Random GIFs and  also user can generate thier own choice(Gifs). </p>
          <div className="btn-group">
            <a href="https://ryanazam007.netlify.app/">
            <button className="btn-pink btn-project">Explore Website</button>

          </a>
          
            <a href="https://github.com/Ryanazam/MY-GIFs.git">
            <VscGithub color='white' size={35} className='gitu'></VscGithub>
            </a>
           
          </div>
          
        </div>

      </div>
      <div className="project-card" id="project4">
        <div className="project-number project-number-left">04</div>
        <div className="project-content project-content-right">
        
          <h2 className="project-heading">Weather App</h2>
          <p className="prject-subheading">  Weather app provide Temperature ,Wind Speed ,Humidty ,Clouds for any given location and time.
          </p>
          <div className="btn-group">
            <a href="https://comforting-pegasus-1403fe.netlify.app">
            <button className="btn-pink btn-project">Explore Website</button>
          </a>
            <a href="https://github.com/Ryanazam/Weather-app.git">
            <VscGithub color='white' size={35}  className='gitu'></VscGithub>
            </a>
           
          </div>
          
        </div>

      </div>
        


        







    </div>
  </div>

  )
}

export default Project