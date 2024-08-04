// import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LandingPage from './../src/components/LandingPage/LandingPage';
import Home from './../src/components/Home/Home';
import Drawing from './components/Drawing/DrawingGallery';
// import Photo from './../src/components/Photo/PhotoControl';
// import Video from './../src/components/Video/Video';
import About from './../src/components/About/About';
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
        <Route path='/drawing' element={<Drawing/>} />
        {/* <Route path='/photo' element={<Photo/>} />
        <Route path='/video' element={<Video/>} /> */}
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
    {/* <Footer /> */}
  </>
);
}
  
export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './src/components/Home/Home';
// import About from './src/components/About/About';
// // Import other components as needed

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* Define other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;