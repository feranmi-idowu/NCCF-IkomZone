import React, { useState } from "react";
import logo from "../images/nccf-logo-no-bg.png";
import { NavLink } from "react-router-dom";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle menu on small screens
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
     // 👇 Function to scroll smoothly to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth animation
      setMenuOpen(false); // close the menu after clicking
    }
  };

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

                <nav className={menuOpen ? "nav-links active" : "nav-links"} >
                    <a onClick={() => scrollToSection("about")}>About</a>
                    <a onClick={() => scrollToSection("programs")}>Programs</a>
                    <a onClick={() => scrollToSection("events")}>Events</a>
                    <a onClick={() => scrollToSection("sermons")}>Sermons</a>
                    <a onClick={() => scrollToSection("give")}>Give</a>
                    <a onClick={() => scrollToSection("gallery")}>Gallery</a>
                    <a onClick={() => scrollToSection("contact")}>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;