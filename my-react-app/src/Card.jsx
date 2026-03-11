import { useState } from 'react'
import './App.css'

function Card({dino,  description}) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>The {dino} was {description}</p>
        </div>
    )
}

export default Card