import '../App.css';
import React from 'react';
import Header from './Header';
import PhotoControl from './PhotoControl';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <div className="text-center" style={{backgroundColor: '#212529'}}>
        <Header />
      </div>
      <div className="container mb-5">
        <div className="text-center">
          <PhotoControl />
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;