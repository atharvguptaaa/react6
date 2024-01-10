import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="bg-green-300 text-black rounded-xl  mb-2">Tailwind Test</h1>
   
    <Card name="Suzy" button="Talk"/>
    <Card name="Mary" button="Meet"/>
        
    </>
  )
}

export default App
