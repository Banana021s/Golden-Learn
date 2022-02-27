import "./NavItems.css"

const NavItems = props => {
    return (
        <ul className="Navbar-nav">
            <li className="Nav-item"><a href=""> { props.icons[0] } { props.titles[0] } </a> </li>
            <li className="Nav-item"><a href=""> { props.icons[1] } { props.titles[1] } </a> </li>
            <li className="Nav-item"><a href=""> { props.icons[2] } { props.titles[2] } </a> </li>
            <li className="Nav-item"><a href=""> { props.icons[3] } { props.titles[3] } </a> </li>
        </ul>
    )
}

export default NavItems