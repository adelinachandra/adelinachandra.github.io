import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Home from "./Pages/Home";
import Header from './Components/Header/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <p className='text-center mt-5 mx-10 text-xs'>© 2024 Adelina Chandra. Hosted by Github Pages. <br/>This work is licensed under CC BY NC ND 4.0</p>
    </div>
    
  )
}

export default App
