// import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LandingPage from './../src/components/LandingPage/LandingPage';
import Home from './../src/components/Home/Home';
import About from './../src/components/About/About';
import Drawing from './components/Drawing/DrawingGallery';
import Digital from './components/Digital/DigitalGallery';
import Collaboration from './components/Collaboration/CollaborationGallery';
import Book from './../src/components/Book/Book';
import Archive from './components/Archive/ArchiveGallery';
import News from './components/News/News';
import React from 'react';
import './App.css';


function App() {
return (
  <>
    <Router>
    {/* <Navbar /> */}
    <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/info' element={<About/>} />
        <Route path='/drawing' element={<Drawing/>} />
        <Route path='/digital' element={<Digital/>} />
        <Route path='/collaboration' element={<Collaboration/>} />
        <Route path='/collaboration/book' element={<Book/>} />
        <Route path='/archive' element={<Archive/>} />
        <Route path='/highlights' element={<News/>} />
    </Routes>
    </Router>
    {/* <Footer /> */}
  </>
);
}
  
export default App;
