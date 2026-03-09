import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from "./Nav.jsx"
import Card from "./Card.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card dept="Mechanical" description="builds the robot" />
    <Card dept="Controls" description="codes the robot"/>
    <Card dept="Strategy" description="designs optimal game play & the robot" />
    <App />
  </StrictMode>,
)
