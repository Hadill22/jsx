import logo from './logo.svg';
import './App.css';
import React from 'react';
import imageInSrc from'./images/imageInSrc.jpg'
function App() {
 
  return (
    <React.Fragment>
    <div className="background-style">
    
    </div>

    <div style={{ border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className ='title red'> MY horses</h1>
    
     <br/>
    <div >
    <img src={imageInSrc} alt="imageInSrc" className='images'  />
    
    <br/>
    
    <img src="/imageInPublic.jpg" alt="imageInPublic"   className='images' /></div>
    
    <video width="320" height="240" controls>
        <source src="https://www.youtube.com/watch?v=3HzWCYVXcKo" type="video/mp4" />
      </video>
    
    </div>
    </React.Fragment>
      
    
    
    
  );
}

export default App;
