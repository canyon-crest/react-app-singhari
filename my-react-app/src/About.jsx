import "./App.css"
import Example from "./Example"
import GoogleLogin from "./GoogleLogin"

function About() {

    return (
        <div>
            <GoogleLogin />
            <Example />
            <p>this is where I talk about me</p>
            <p>I like dinosaurs so I made it about dinosaurs.</p>
        </div>
    )
}

export default About