import React from 'react'

import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    
    <div className="footer">

    <div className="container">

      <div className="footer-wrapper">
        <div className="footer-faded-text">Ryan azam</div>

        <div className="link-wrapper">

          <a href="#projects">Projects</a>
          <a href="#skills">skills</a>
          <a href="#contactme">Contanct Us</a>
      
      </div>
      
      <div className="icon-wrapper">
        <a href="https://github.com/Ryanazam">
            <BsGithub size={28} color='white'/> </a>
        
        <a href="https://linkedin.com/in/ryan-azam-12459a1b9" target="blank" >
     
        <BsLinkedin color='white' size={28}/>
        </a>
        
        <a href="https://instagram.com/ryanazam007" target="blank">
        <BsInstagram color='white' size={28}/>
          
        </a>
        
       
      </div>
    </div>
    </div>
  </div>
  )
}

export default Footer