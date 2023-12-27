
// import { Fragment } from 'react'
import './App.css'
import 'react-router-dom'
import Header from './components/header/Header'
import { BrowserRouter} from 'react-router-dom'
import Hero from './components/header/Hero'
import SectionOne from './components/main/SectionOne'

function App() {
 

  return (
    <BrowserRouter>
     <header>
      <Header/>
      <Hero/>
     </header>
     <main>
      <SectionOne/>
     </main>
    </BrowserRouter>
  )
}

export default App
