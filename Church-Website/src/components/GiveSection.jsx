import { Link } from 'react-router-dom';
import './GiveSection.css';

function GiveSection() {
  return (
    <section className="give-section">
      <div className="give-section-inner">

        <div className="give-section-text">
          <span className="give-section-label">Give</span>
          <h2>Support the Work of God</h2>
          <p>
            Your giving fuels our mission — reaching lives, building faith,
            and opening doors of divine opportunity in our community and beyond.
          </p>
          <blockquote>
            "God loves a cheerful giver." — 2 Corinthians 9:7
          </blockquote>
          <Link to="/give">
            <button className="give-section-btn">Give Now →</button>
          </Link>
        </div>

        <div className="give-section-cards">
          <div className="give-mini-card">
            <div className="mini-card-icon">🏦</div>
            <strong>First Bank of Nigeria</strong>
            <p>Living Faith Church Orimerunmu</p>
            <span className="mini-account">0123456789</span>
          </div>
          <div className="give-mini-card">
            <div className="mini-card-icon">🏦</div>
            <strong>Guaranty Trust Bank</strong>
            <p>Living Faith Church Orimerunmu</p>
            <span className="mini-account">0987654321</span>
          </div>
        </div>

      </div>
    </section>
  );
}
 export default GiveSection;