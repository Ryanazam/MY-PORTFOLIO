
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>

      <Navbar/>
     <Hero/>
     
      </div>

      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
