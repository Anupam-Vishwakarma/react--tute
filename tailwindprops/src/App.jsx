import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ChangeMode from "./ChangeMode";
import InputComponent from "./InputComponent"
import DisplayComponent from './DisplayComponent';

function App() {
 // const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <h1 className='bg-black text-green-400 p-4 rounded-xl'>Tailwind Test</h1>
      <InputComponent onNameChange={setName} />
      <DisplayComponent name={name} />
      <ChangeMode />    
    </>
  )
}

export default App
