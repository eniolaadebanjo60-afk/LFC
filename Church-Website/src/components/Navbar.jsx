import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <Link to='/'><h2>LFC ORIMERUNMU</h2></Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/testimonies">Testimonies</Link>
                <Link to="/newsletter">Newsletter</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar