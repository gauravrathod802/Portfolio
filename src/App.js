import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Intro/>
      <Skills/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
