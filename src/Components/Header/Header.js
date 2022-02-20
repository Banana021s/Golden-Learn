import "./Header.css"
import Navbar from './../Navbar/Navbar'

function Header() {
    const titles = [ "Home", "Courses", "Blog", "Contact us" ]

    return (
        <header className="Header">
            <div className="container">
                <Navbar titles={titles} />
            </div>
        </header>
    )
}

export default Header