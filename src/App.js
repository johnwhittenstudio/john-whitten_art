import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './../src/components/Home/Home';
import Drawing from './../src/components/Drawing/Drawing';
import Photo from './../src/components/Photo/Photo';
import Video from './../src/components/Video/Video';
import About from './../src/components/About/About';
import Contact from './../src/components/Contact/Contact';
import React from 'react';
import './App.css';




function App() {
return (
  <>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/drawing' element={<Drawing/>} />
        <Route path='/photo' element={<Photo/>} />
        <Route path='/video' element={<Video/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
    {/* <Footer /> */}
  </>
);
}
  
export default App;