import React from 'react'
import dots from '../Components/Assests/dots.png'
import cube from '../Components/Assests/cube.png'
import circle from '../Components/Assests/circle.png'
import zigzag from '../Components/Assests/zigzags.png'
import plus from '../Components/Assests/plus.png'
import profile from '../Components/Assests/newlogo3.jpg'
import Typed from 'react-typed'

const Hero = () => {

  return (
    <div className="hero-section">
            <div className="faded-text">Ryan Azam</div>
            <div className="hero-section-left">
                <div className="hero-section-heading">Hi, I'm Ryan Azam</div>

                <div className="hero-section-heading hero-section-subheading">
                    I am a <span className="role">
                    <Typed
               strings={ [
          "Full Stack Developer",
          "MERN Developer",
          "React Developer",
          "Backend Developer",
          "Coder",
        ]}
      
        typeSpeed= {100}
        backSpeed= {80}
        backDelay= {1000}
        loop
      />
                    </span>
                </div>
                <div className="hero-section-description">
                    I’m a software developer and here is my portfolio website. Here you’ll
                    learn about my journey as a software developer.
                </div>
                <div className="btn-pink" id="btn"> <a href="#contactme">Hire me</a></div>
                </div>

                <div className="hero-section-right">
                    <div className="absolute icons icon-dots">
                        <img src={dots} alt="icon" />
                      </div>
                      <div className="absolute icons icon-cube">
                        <img src={cube} alt="icon" />
                      </div>
                      <div className="absolute icons icon-circle">
                        <img src={circle} alt="icon" />
                      </div>
                      <div className="absolute icons icon-zigzag">
                        <img src={zigzag} alt="icon" />
                      </div>
                      <div className="absolute icons icon-plus">
                        <img src={plus} alt="icon" />
                      </div>
                      <div className="user-image">
                        <img src={profile} width={320} alt="orofileimg"/>
                      </div>
                </div>
                </div>
  )
}

export default Hero