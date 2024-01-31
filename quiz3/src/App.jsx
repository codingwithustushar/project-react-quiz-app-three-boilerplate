import React from 'react'
import './App.css'
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/quiz" element={ <Quiz/>}/>
  <Route path="/result" element={<Result/>}/>
</Routes>
</>
  )
}

export default App
