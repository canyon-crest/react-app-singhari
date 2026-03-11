import { useState } from 'react'
import './App.css'


function Generator() {

    const [dino, getdino] = useState("");
    const dinos = ["Anchiornis Huxleyi", "Baryonyx Walkeri", "Confuciusornis Sanctus"];

    return (
        <div>
            <button onClick={() => getdino((dino) => dinos[Math.floor(Math.random() * 3)])}> Get a random dinosaur! </button>
            <p>Your random dinosaur: {dino}</p>
        </div>
    )
}

export default Generator