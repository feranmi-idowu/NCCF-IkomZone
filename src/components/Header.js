import React, { useState } from "react";
import logo from "../images/nccf-logo-no-bg.png";
import { NavLink } from "react-router-dom";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle menu on small screens
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
     // 👇 Function to scroll smoothly to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth animation
      setMenuOpen(false); // close the menu after clicking
    }
  };
*/

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
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"e>
                    ☰
                    </button>

                <nav className={menuOpen ? "nav-links active" : "nav-links"} >
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/programs" onClick={closeMenu}>Programs</NavLink>
                    <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
                    <NavLink to="/sermons" onClick={closeMenu}>Sermons</NavLink>
                    <NavLink to="/give" onClick={closeMenu}>Give</NavLink>
                    <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;