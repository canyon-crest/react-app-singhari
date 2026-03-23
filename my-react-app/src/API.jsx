import { useState } from "react";


function API() {
    const [joke, setJoke] = useState('');
    const fetchJoke = async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
            const data = await response.json()

            if (data.type === "single") {
                setJoke(data.joke)
            } else {
                setJoke(data.setup + " - " + data.delivery)
            }
        } catch (error) {
            console.error("Joke error:", error)
        }
    }

    return (
        <>
            <div>
                <button onClick={fetchJoke}>Get Joke</button>
                {joke && <p>{joke}</p>}
            </div>
        </>
    )
}

export default API