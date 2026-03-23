import "./App.css"
import Card from "./Card.jsx"
import API from "./API.jsx"

function Home() {

    return (
        <>
      <div>
        <h1>dinosaur facts!</h1>
        <Card dino="Anchiornis huxleyi" description="an early bird, having feathers, pellets, and many other traits. Unlike modern birds, it had four wings, with its feet also having flight feathers like the Microraptor." />
        <Card dino="Baryonyx Walkeri" description="a theropod dinosaur from the Early Cretaceous period that bares some similarity to Spinosaurs though isn't one. It likely ate fish." />
        <h2>A joke generator!</h2>
        <API />
      </div>
      </>
    )
}

export default Home