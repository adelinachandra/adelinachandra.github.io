import { useState } from 'react'
import './App.css'
import Biography from './Components/Biography/Biography';
import { Experience } from './Components/Experience/Experience';
import { Education } from './Components/Education/Education';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
      <Biography/>
    </div>
    
  )
}

export default App
