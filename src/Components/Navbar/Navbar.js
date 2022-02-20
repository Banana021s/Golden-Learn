import "./Navbar.css"
import NavItems from "./../NavItems/NavItems"
import { Profile, HambergerMenu, Login, ChartSuccess } from "iconsax-react"

function Navbar() {
    const titles = [ "Home", "Courses", "Blog", "Contact us" ]
    
    return (
        <nav className="Navbar">
            <h1 className="Nav-logo Caveat-font">Golden <span>Learn</span> </h1>
            <NavItems titles={titles} />
            <div className="Navbar-details">
                <button className="user-dropdown-btn"> 
                    <Profile color="#cdcdcd" variant="Broken" size={28}/>
                    <ul className="user-dropdown-menu">
                        <li className="user-dropdown-item">
                            <a href="">Sign in <Login color="#cdcdcd" variant="Broken"/> </a>
                        </li>
                        <li className="user-dropdown-item">
                            <a href="">Sign up <ChartSuccess color="#cdcdcd" variant="Broken"/></a>
                        </li>
                    </ul>
                </button>
                <button className="hamberger-menu-btn"> <HambergerMenu color="#cdcdcd" variant="Broken" size={28}/> </button>
            </div>
        </nav>
    )
}

export default Navbar