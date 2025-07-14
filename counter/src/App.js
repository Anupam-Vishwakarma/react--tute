// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(15)

  const addValue=()=>{
    if(counter<20){
     setCounter(counter+1)
    } 
    else {
      alert ("value cannot be more than 21")
      setCounter(counter=10)
    }
  }

  const removeValue=()=>{
    if(counter>0) {
      setCounter(counter-1)
    }
    else {
      alert ("value cannot be less than 0")
      setCounter(counter=10)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>{counter} Add Value</button>
      <br/>
      <button onClick={removeValue}> Remove Value {counter}</button>
    </>
  );
}

export default App;
