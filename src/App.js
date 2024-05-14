import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
//imrs

function App() {
  const [mode2, setmode2] = useState('light')
  const toGreen=()=>{
    document.body.style.backgroundColor='green';
    setmode2('success');
}
const toYellow=()=>{
    document.body.style.backgroundColor='yellow';
    setmode2('warning');
}
const toRed=()=>{
    document.body.style.backgroundColor='red';
    setmode2('danger');
}
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>
    {
      setalert({
          msg:message,
          type:type,
        })
        setTimeout(() => {
          setalert(null);
        }, 2000);
    }
  const toggleMode=()=>
    {
      setmode2('primary');
      if(mode==='light')
        {
          setmode('dark');
          document.body.style.backgroundColor='#040850';
          showAlert("Dark Mode enabled","success");
        }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Dark Mode disabled","success")
      }  
     
    }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode} toYellow={toYellow} toRed={toRed} toGreen={toGreen}/>
    <Alert alert={alert}/>
    <div className="container"> 
    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About /> */}
          {/* </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter text" mode={mode} mode2={mode2}/>
          {/* </Route>
        </Switch> */}
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
