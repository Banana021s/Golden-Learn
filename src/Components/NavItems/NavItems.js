import "./NavItems.css"
import { Home2, Bag2, Notepad2, Call } from "iconsax-react"

function NavItems(props) {
    return (
        <ul className="Navbar-nav">
            <li className="Nav-item"><a href=""> <Home2 variant="Broken"/> { props.titles[0] } </a> </li>
            <li className="Nav-item"><a href=""> <Bag2 variant="Broken"/> { props.titles[1] } </a> </li>
            <li className="Nav-item"><a href=""> <Notepad2 variant="Broken"/> { props.titles[2] } </a> </li>
            <li className="Nav-item"><a href=""> <Call variant="Broken"/> { props.titles[3] } </a> </li>
        </ul>
    )
}

export default NavItems