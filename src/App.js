import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='bg-color-light-blue'>
          <Routes>
             <Route path="/" element={<About />} />
             <Route path="/about" element={<About />} />
          </Routes>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
