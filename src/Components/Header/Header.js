import "./Header.css"
import Navbar from './../Navbar/Navbar'
import logo from "./logo.png"
import { Bag2 } from "iconsax-react"
import github from "./github.svg"

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
                        <h1 className="Header-logo-title">you can be a <span>gold</span></h1>
                        <h3 className="Header-logo-title-desc">with <span>Golden</span> <span>Learn</span></h3>
                        
                        <div className="Header-btns">
                            <a href="" className="see-all-courses-btn"> <Bag2 color="var(--dark-900)" variant="Broken"/> see all courses</a>
                            <a href="https://github.com/Banana021s/Golden-Learn" target="_blank" className="github-btn"> <img src={github} alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header