import './About.css';
import churchImg from './church.jpg'
 
function About() {
  return (
    <div className="about-page">
 
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-label">Who We Are</span>
          <h1>Living Faith Church<br />Orimerunmu</h1>
          <p>A Place of Open Doors and Divine Opportunities</p>
        </div>
        <div className="about-hero-bar"></div>
      </section>
 
      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="mission-line"></div>
          <blockquote>
            We exist to open doors — to faith, to community, and to the fullness
            of God's purpose for every life that walks through our doors.
          </blockquote>
        </div>
      </section>
 
      <section className="about-pillars">
        <span className="about-label centered">What We Stand For</span>
        <h2>Our Core Values</h2>
        <div className="pillars-grid">
          <div className="pillar">
            <div className="pillar-number">01</div>
            <h3>Faith</h3>
            <p>
              We are rooted in the Word of God and committed to a life of
              active, growing faith in Jesus Christ.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-number">02</div>
            <h3>Community</h3>
            <p>
              We believe no one should walk alone. Our church is a family
              built on love, support, and genuine connection.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-number">03</div>
            <h3>Purpose</h3>
            <p>
              Every person has a divine calling. We help people discover,
              develop, and walk in their God-given purpose.
            </p>
          </div>
        </div>
      </section>
 
      <section className="about-info">
        <div className="about-info-image">
          <img src={churchImg} alt="Living Faith Church" />
          <div className="info-image-tag">Est. Living Faith</div>
        </div>
        <div className="about-info-content">
          <span className="about-label">Our Church</span>
          <h2>A Place You Can Call Home</h2>
          <p>
            Living Faith Church Orimerunmu is more than a building — it is a
            vibrant, Spirit-filled community where lives are transformed by the
            power of God's Word.
          </p>
          <p>
            From our Sunday services to our midweek gatherings, every programme
            is designed to bring you closer to God and connect you with
            like-minded believers.
          </p>
          <div className="info-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Services Weekly</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Community</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Open Doors</span>
            </div>
          </div>
        </div>
      </section>
 
      <section className="about-times">
        <div className="times-inner">
          <div className="time-item">
            <strong>Sunday Service</strong>
            <span>8:00 AM</span>
          </div>
          <div className="times-divider"></div>
          <div className="time-item">
            <strong>Midweek Service</strong>
            <span>Wednesday 5:00 PM</span>
          </div>
          <div className="times-divider"></div>
          <div className="time-item">
            <strong>Location</strong>
            <span> Orimerunmu, Mowe, Ogun State</span>
          </div>
        </div>
      </section>
 
      <section className="about-cta">
        <h2>Come Experience It Yourself</h2>
        <p>Words can only say so much. Come and see for yourself.</p>
        <a href="/contact">
          <button className="about-btn-white">Plan Your Visit</button>
        </a>
      </section>
 
    </div>
  );
}
 
export default About;