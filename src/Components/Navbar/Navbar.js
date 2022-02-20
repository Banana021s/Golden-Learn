import "./Navbar.css"
import NavItems from "./../NavItems/NavItems"

function Navbar() {
    return (
        <nav className="Navbar">
            <h1 className="Nav-logo Caveat-font">Golden <span>Learn</span> </h1>
            <NavItems />
            <div></div>
        </nav>
    )
}

export default Navbar