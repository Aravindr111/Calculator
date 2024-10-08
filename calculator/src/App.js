import React, { useState } from "react";
import './App.css';
function App() {

  const[result,setResult]=useState('');
  const clickhandler= (event)=>{
    setResult(result.concat(event.target.value));
  };

  const cleardisplay=()=>{
    setResult(' ');   
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

 
  
  return (
    <>
    <div className="Header">
      <h1>SimpleCalc</h1>
    </div>
    <div className="calc">
         <input type="text" placeholder="0" id="answer" value={result}/>
         <div className="buttons">

         <input type="button" value="9" className="button" onClick={clickhandler}/>
         <input type="button" value="8" className="button" onClick={clickhandler}/>
         <input type="button" value="7"className="button" onClick={clickhandler}/>
         <input type="button" value="6"className="button" onClick={clickhandler}/>
         <input type="button" value="5"className="button"onClick={clickhandler}/>
         <input type="button" value="4"className="button" onClick={clickhandler}/>
         <input type="button" value="3"className="button"onClick={clickhandler}/>
         <input type="button" value="2"className="button" onClick={clickhandler}/>
         <input type="button" value="1"className="button"onClick={clickhandler}/>
         <input type="button" value="0" className="button" onClick={clickhandler}/>

         <input type="button" value="+"className="button"onClick={clickhandler}/>
         <input type="button" value="-"className="button"onClick={clickhandler}/>
         <input type="button" value="*"className="button"onClick={clickhandler}/>
         <input type="button" value="/"className="button"onClick={clickhandler}/>
         <input type="button" value="%"className="button"onClick={clickhandler}/>
         <input type="button" value="."className="button"onClick={clickhandler}/>

         <input type="button" value="clear"className="button1" onClick={cleardisplay}/>
         <input type="button" value="=" className="button1" onClick={calculateResult}/>
         </div>
    </div>
    
    </>
  );
}

export default App; 