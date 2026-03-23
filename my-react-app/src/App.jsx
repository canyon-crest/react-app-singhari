import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Card from "./Card.jsx"
import Nav from "./Nav.jsx"
import Generator from "./Generator.jsx"
import Footer from './Footer.jsx'
import About from './About.jsx'
import Home from './Home.jsx'


function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <Nav setPage={setPage}/>
      {page === "about" && <About />}
      {page === "generator" && <Generator />}
      {page === "home" && <Home />}
      <Footer />
    </>
  )
}

export default App
