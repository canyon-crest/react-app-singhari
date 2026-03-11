import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from "./Nav.jsx"
import Generator from "./Generator.jsx"
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    {/* dino generator */}
    <Generator />
    {/* Two cards on two dinos */}
    <App />
    <Footer />
  </StrictMode>,
)
