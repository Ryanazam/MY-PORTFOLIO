import React, { useRef } from 'react'
import logo from '../Components/Assests/newlogo1.jpeg'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {

const navRef = useRef();

    const clickHandler =() =>{

        navRef.current.classList.toggle('active')
    }
  return (
    
        <div className="navbar">
                <div className="logo-container">
                    <div>
                      <img src={logo} className="logo" alt='logo'/>
                </div>
                 <div className="logo-text">yan Azam</div>
                 </div>

                 <div className="nav-item" ref={navRef}>
                    <div><a href="#projects" className="anchor">Projects</a>
                    <div className="horizontal"></div>
                    </div>
                   <div> <a href="#skills" className="anchor">Skills</a>
                    <div className="horizontal"></div></div>
                    <div><a href="#contactme" className="anchor">Contact Me</a>
                      <div className="horizontal"></div></div>
                    <div><a href='https://drive.google.com/file/d/1hvRknUno4kryifRj2LLFgHGx1Kf9fDDy/view?usp=sharing' className="anchor">My Resume</a>
                      <div className="horizontal"></div></div>
                 </div>
                 <a href="#" className="nav-toggle nav-link" id="nav-click" onClick={clickHandler}>
                    <FaBars/>
                   </a>
           
                </div>
    
  )
}

export default Navbar