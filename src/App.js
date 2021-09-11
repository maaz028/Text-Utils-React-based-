// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alerts from './components/Alerts';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')
    const[modeText,setModeText] = useState('Enable Dark Mode')
    const [alert, setAlert] = useState(null)
    const [Style, setStyle] = useState({
        color:'black'
    })

    const showAlert = (type,msg)=>
    {
        setAlert({
            msg:msg,
            type:type
        })
        setTimeout(()=>
        {
            setAlert(null);
        },2000)
    }

    const enableMode = ()=>{
        if (mode==='light'){
            setMode('dark')
            setModeText('Dark Mode Enabled')
            setStyle({             
                color:'white',
                fontFamily: "'Abel', sans-serif"
                
            })
            document.body.style.backgroundColor="#010131";
            showAlert('Theme changed!','Dark mode has been enabled')
            
        }
        else{
            setMode('light')
            setModeText('Enable Dark Mode')
            setStyle({
                color:'black'
            })
            document.body.style.backgroundColor="white";
            showAlert('Theme changed!','Light mode has been enabled')
        }}
  return (

  <>
  <Navbar title='TextUtils'  Style = {Style} modeText = {modeText} enableMode = {enableMode} mode={mode}/>
  <Alerts alert={alert} />
  <Textarea showAlert={showAlert} Style={Style}/>
  </>

  );

}
export default App;
