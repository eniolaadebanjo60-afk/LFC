import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className="navbar">
            <NavLink to='/'><h2>LFC ORIMERUNMU</h2></NavLink>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                <NavLink to="/testimonies" onClick={() => setMenuOpen(false)}>Testimonies</NavLink>
                <NavLink to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</NavLink>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar