import "./Navbar.css"
import NavItems from "./../NavItems/NavItems"
import { Profile, HambergerMenu, Login, ChartSuccess } from "iconsax-react"

const Navbar = props => {
    const [ ...titles ] = props.titles.map(objectTitle => objectTitle.title)
    const [ ...icons ]  = props.titles.map(objectTitle => objectTitle.icon)
    const [ ...active ] = props.titles.map(objectTitle => objectTitle.active)

    return (
        <nav className="Navbar">
            <h1 className="Nav-logo Caveat-font">Golden <span>Learn</span> </h1>
            <NavItems titles={titles} icons={icons} activate={active} />
            <div className="Navbar-details">
                <button className="user-dropdown-btn">
                    <Profile color="var(--white-400)" variant="Broken" size={28} />
                    <ul className="user-dropdown-menu">
                        <li className="user-dropdown-item">
                            <a href="">Sign in <Login color="var(--white-400)" variant="Broken" /> </a>
                        </li>
                        <li className="user-dropdown-item">
                            <a href="">Sign up <ChartSuccess color="var(--white-400)" variant="Broken" /></a>
                        </li>
                    </ul>
                </button>
                <button className="hamberger-menu-btn"> <HambergerMenu color="var(--white-400)" variant="Broken" size={28} /> </button>
            </div>
        </nav>
    )
}

export default Navbar