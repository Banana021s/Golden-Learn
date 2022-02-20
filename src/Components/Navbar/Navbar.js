import "./Navbar.css"
import NavItems from "./../NavItems/NavItems"

function Navbar() {
    const titles = [ "Home", "Courses", "Blog", "Contact us" ]
    
    return (
        <nav className="Navbar">
            <h1 className="Nav-logo Caveat-font">Golden <span>Learn</span> </h1>
            <NavItems titles={titles} />
            <div></div>
        </nav>
    )
}

export default Navbar