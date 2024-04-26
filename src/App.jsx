import { useState } from 'react'
import './App.css'
import Biography from './Components/Biography/Biography';
import { Experience } from './Components/Experience/Experience';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
      <Biography/>
      <Experience/>
    </div>
    
  )
}

export default App
