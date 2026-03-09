import { useState } from 'react'
import './App.css'

function Card({dept,  description}) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>The {dept} department {description}. </p>
            <button onClick={() => setCount((count) => count +1)}>Tap to show support for {dept}</button>
            <p>You've shown support for {dept} {count} times!</p>
        </div>
    )
}

export default Card