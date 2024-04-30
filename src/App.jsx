import { useState } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Header from './Components/Header/Header';
import { Home } from "./Pages/Home";
import { Publication } from './Pages/Publication';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center flex-col'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<Publication />} />
        </Routes>
      </HashRouter>
      <p className='text-center mt-5 mx-10 text-xs'>© 2024 Adelina Chandra. Hosted by <a href="https://github.com/adelinachandra/adelinachandra.github.io" target='_blank'>Github Pages</a>. <br/>This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en">CC BY NC ND 4.0</a></p>
    </div>
  )
}

export default App;