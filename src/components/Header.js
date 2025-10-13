import React, { useState } from "react";
import logo from "../images/nccf-logo-no-bg.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <div className="header-container">
                  <div className="logo-title">
                    <img
                        src={logo}
                        alt="NCCF logo placeholder"
                        className="logo"
                    />
                    <h1 className="">NCCF IKOM Zone</h1>
                  </div>

                 {/*Harmburger*/} 
                 <button className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"e>
                    ☰
                    </button>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
                    <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
                    <a href="#sermons" onClick={() => setMenuOpen(false)}>Sermons</a>
                    <a href="#give" onClick={() => setMenuOpen(false)}>Give</a>
                    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;