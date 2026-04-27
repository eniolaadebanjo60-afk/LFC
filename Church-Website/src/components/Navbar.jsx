import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <NavLink to='/'><h2>LFC ORIMERUNMU</h2></NavLink>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/testimonies">Testimonies</NavLink>
                <NavLink to="/newsletter">Newsletter</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar