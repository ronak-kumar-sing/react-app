
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  const[mode,setmode]=useState('dark');
  const change =()=> {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background = '#1e1d1d'
    }else{
      setmode('light');
      document.body.style.background = 'white'
    }
  }
  return (
  <>
    <Navbar title = 'Ronak' mode={mode} change={change}/>
    <div className="container my-3">
      <TextForm heading = 'Enter Your feedbacks' mode={mode} /> 
      {/* <About mode={darkmode}/> */}
    </div>
    
  </>
  );
}

export default App;
