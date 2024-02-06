import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(0); 
  // let counter = 5;

  const addvalue = ()=>{
    if(counter<20){
      setcounter(counter+1);
    }
  }

  const subtractvalue = ()=>{
      if(counter>0){
        setcounter(counter-1);
      }
  }


  return (
    <>
      <h1>This is Tutorial number 2</h1>
      <h2>Counter Tutorial : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={subtractvalue}>Subtract value</button>
    </>
  )
}

export default App
