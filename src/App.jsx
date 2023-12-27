
import { Fragment } from 'react'
import './App.css'
import 'react-router-dom'
import Header from './components/header/Header'
import { BrowserRouter, Routes } from 'react-router-dom'
import Hero from './components/header/Hero'

function App() {
 

  return (
    <BrowserRouter>
     <header>
      <Header/>
      <Hero/>
     </header>
    </BrowserRouter>
  )
}

export default App
