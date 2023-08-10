import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/pages/Projects';
//import Contact from './components/pages/Contact';
//import './components/assets/style.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='bg-color-light-blue'>
          <Routes>
             <Route path="/" element={<About />} />
             <Route path="/about" element={<About />} />
             <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
