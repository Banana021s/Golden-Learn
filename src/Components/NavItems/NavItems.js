import "./NavItems.css"
import { Home2, Bag2, Notepad2, Call } from "iconsax-react"

function NavItems() {
    return (
        <ul className="Navbar-nav">
            <li className="Nav-item"><a href=""> <Home2 variant="Broken"/> Home      </a>  </li>
            <li className="Nav-item"><a href=""> <Bag2 variant="Broken"/> Courses    </a>  </li>
            <li className="Nav-item"><a href=""> <Notepad2 variant="Broken"/> Blog   </a>  </li>
            <li className="Nav-item"><a href=""> <Call variant="Broken"/> Contact us </a>  </li>
        </ul>
    )
}

export default NavItems