import React, { useState } from "react"
import "./App.css"
const App = ()=>{

  const [MyName , setMyName] = useState("Mehul");

  const ChangeName = () =>{
    if(MyName == "Mehul"){
      setMyName("Bansal");
    }else{
      setMyName("Mehul");
    }
  }
  return(
    <>
    <div className="box">
      <div className="content">{MyName}</div>
      <button className="btn" onClick={ ChangeName } >Click Here...</button>
    </div>
    </>
  )

}

export default App