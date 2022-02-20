import "./Header.css"
import Navbar from './../Navbar/Navbar'
import logo from "./logo.png"

function Header() {
    const titles = [ "Home", "Courses", "Blog", "Contact us" ]

    return (
        <header className="Header">
            <div className="container">
                <Navbar titles={titles} />
                <div className="Header-main-content">
                    <div className="Header-logo-wrap">
                        <img src={logo} className="Header-logo-wrap-overlay" alt="" />
                        <div className="Header-logo-box">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    
                    <div className="Header-titles">

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header