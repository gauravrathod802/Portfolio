import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Intro/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
