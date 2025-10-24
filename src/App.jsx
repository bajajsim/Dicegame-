import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Homepage } from './components/home'
import {Routes,Route} from 'react-router-dom'
import { Dicepage } from './dice'


function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
    <Route path="/dicegame" element={<Dicepage/>}/>
    
  </Routes>
     
    </>
  )
}

export default App
