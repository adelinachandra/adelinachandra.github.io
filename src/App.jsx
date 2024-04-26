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
      <Education/>
      <Experience/>
      <p className='text-center mt-5 mx-10 text-xs'>© 2024 Adelina Chandra. Hosted by Github Pages. <br/>This work is licensed under CC BY NC ND 4.0</p>
    </div>
    
  )
}

export default App
