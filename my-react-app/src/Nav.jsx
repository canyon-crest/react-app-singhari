import "./Nav.css"

function Nav({ setPage }) {

    return (
        <div>
            <ul>
                <li onClick={() => setPage("generator")}>Random Dinosaur</li>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("about")}>About</li>
            </ul>
        </div>
    )
}

export default Nav