import "./Home.css";
import { Link } from "react-router-dom";
import aboutImg from './mychurch.jpg'
 
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Welcome to Our Church</span>
          <h1>Living Faith Church <span><br />Orimerunmu</span> </h1>
          <p>A Place of Open Doors and Divine Opportunities</p>
          <div className="hero-buttons">
            <Link to='/about'>
              <button className="btn-primary">Join Us</button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>
 
      <section className="section about">
        <div className="about-content">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="Living Faith Church Orimerunmu" />
          </div>
          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2>Who We Are</h2>
            <p>
              We are a vibrant, Spirit-filled church committed to helping people
              grow in faith, experience God deeply, and live with divine purpose.
              Everyone is welcome here.
            </p>
            <Link to="/about">
              <button className="btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </section>
 
      <section className="section dark services">
        <span className="section-label light-label">Plan Your Visit</span>
        <h2>Service Times</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">&#9788;</div>
            <strong>Sunday Service</strong>
            <span>8:00 AM</span>
          </div>
          <div className="service-card">
            <div className="service-icon">&#9788;</div>
            <strong>Midweek Service</strong>
            <span>Wednesday 5:00 PM</span>
          </div>
        </div>
      </section>
 
      <section className="section sermon">
        <div className="sermon-inner">
          <span className="section-label">Media</span>
          <h2>Featured Sermon</h2>
          <p className="sermon-quote">"Walking Through Open Doors"</p>
          <button className="btn-primary">Watch Now</button>
        </div>
        <div className="sermon-decoration"></div>
      </section>
 
      <section className="section dark testimonies">
        <span className="section-label light-label">Stories</span>
        <h2>Testimonies</h2>
        <div className="testimony-grid">
          <div className="testimony-card">
            <div className="quote-mark">"</div>
            <p>God changed my life completely through this ministry!</p>
            <span>— Church Member</span>
          </div>
          <div className="testimony-card">
            <div className="quote-mark">"</div>
            <p>I found family, faith, and purpose all in one place.</p>
            <span>— Church Member</span>
          </div>
          <div className="testimony-card">
            <div className="quote-mark">"</div>
            <p>This church gave me a fresh start and a new hope.</p>
            <span>— Church Member</span>
          </div>
        </div>
      </section>
 
      <section className="section cta">
        <div className="cta-inner">
          <span className="section-label light-label">Come As You Are</span>
          <h2>Join Us This Sunday</h2>
          <p>You are always welcome. Come and experience God with us.</p>
          <Link to="/contact">
            <button className="btn-white">Contact Us</button>
          </Link>
        </div>
      </section>
 
    </div>
  );
}
 
export default Home;