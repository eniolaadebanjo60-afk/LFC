import './Testimonies.css';
import { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa6';

const defaultTestimonies = [
  {
    id: 1,
    name: "Sister Blessing Adeyemi",
    category: "Healing",
    text: "I was diagnosed with a condition the doctors said would take months to recover from. After a special prayer session at Living Faith Church Orimerunmu, I went back for my check-up and the doctors were confused. God healed me completely. To God be the glory!",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Brother Femi Okafor",
    category: "Financial Breakthrough",
    text: "I had been unemployed for over a year. I kept coming to church, kept trusting God. Three days after our midweek service where Pastor prayed specifically for divine opportunities, I got two job offers in one day. This church is a place of open doors indeed.",
    date: "February 2025",
  },
  {
    id: 3,
    name: "Sister Grace Nwosu",
    category: "Family Restoration",
    text: "My marriage was on the verge of collapse. My husband and I had not spoken properly in months. Through counselling and prayer at this church, God restored our home. Today we are stronger than ever. I am so grateful for this ministry.",
    date: "February 2025",
  },
  {
    id: 4,
    name: "Brother Taiwo Adeleke",
    category: "Academic Success",
    text: "I failed my professional exams twice and was about to give up. A member of this church prayed with me and encouraged me to trust God. On my third attempt I not only passed — I came out with a distinction. God is faithful.",
    date: "January 2025",
  },
  {
    id: 5,
    name: "Anonymous",
    category: "Salvation",
    text: "I walked into Living Faith Church Orimerunmu as a broken person with no faith and no direction. That Sunday I gave my life to Christ. It has been the single greatest decision of my life. I am not the same person I was.",
    date: "January 2025",
  },
  {
    id: 6,
    name: "Sister Motunrayo Bello",
    category: "Divine Protection",
    text: "Our vehicle was involved in a terrible accident on the expressway. Every other vehicle involved was badly damaged. Ours had not a single scratch and none of us were hurt. God's protection over this family is real.",
    date: "December 2024",
  },
];

const categories = ["All", "Healing", "Financial Breakthrough", "Family Restoration", "Academic Success", "Salvation", "Divine Protection"];

function Testimonies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('lfc_testimonies');
    if (saved) {
      setTestimonies(JSON.parse(saved));
    } else {
      setTestimonies(defaultTestimonies);
      localStorage.setItem('lfc_testimonies', JSON.stringify(defaultTestimonies));
    }
  }, []);

  const filtered = activeCategory === "All"
    ? testimonies
    : testimonies.filter((t) => t.category === activeCategory);

  return (
    <div className="testimonies-page">

      <section className="testimonies-hero">
        <div className="testimonies-hero-inner">
          <span className="testimonies-label">To God Be The Glory</span>
          <h1>Testimonies of<br />God's Faithfulness</h1>
          <p>
            These are real stories from real people whose lives have been
            touched by the power of God at Living Faith Church Orimerunmu.
          </p>
        </div>
        <div className="hero-bottom-bar"></div>
      </section>

      <section className="testimonies-filter">
        <div className="filter-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="testimonies-grid-section">
        <div className="testimonies-grid">
          {filtered.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', width: '100%' }}>
              No testimonies in this category yet.
            </p>
          ) : (
            filtered.map((testimony, i) => (
              <div
                className="testimony-card"
                key={testimony.id}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="card-top">
                  <span className="testimony-category">{testimony.category}</span>
                  <div className="quote-icon">"</div>
                </div>
                <p className="testimony-text">{testimony.text}</p>
                <div className="testimony-footer">
                  <div className="testimony-avatar">
                    {testimony.name === "Anonymous" ? "?" : testimony.name.charAt(testimony.name.indexOf(" ") + 1)}
                  </div>
                  <div>
                    <strong>{testimony.name}</strong>
                    <span>{testimony.date}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="testimonies-share">
        <div className="share-inner">
          <div className="share-left">
            <span className="testimonies-label">Your Turn</span>
            <h2>Has God Done Something<br />Amazing in Your Life?</h2>
            <p>
              Your testimony is not just your story — it is someone else's
              miracle waiting to happen. When you share what God has done,
              you give others the courage to believe.
            </p>
            <p>
              Revelation 12:11 says we overcome by the blood of the Lamb
              and the word of our testimony. Do not keep your miracle to yourself.
            </p>
          </div>
          <div className="share-right">
            <div className="share-card">
              <div className="share-card-icon"><FaEnvelope /></div>
              <h3>Send Your Testimony</h3>
              <p>
                Write your testimony and send it to us. Include your name
                (or let us know if you prefer to stay anonymous), the category
                of your testimony, and what God did for you.
              </p>
              <a
                href="mailto:eniolaadebanjo60@gmail.com?subject=My Testimony&body=Name: %0ACategory: %0AMyTestimony: "
                className="share-email-btn">
                <FaEnvelope />
                <span className='email-text'>eniolaadebanjo60@gmail.com</span>
              </a>
              <p className="share-note">
                Selected testimonies will be featured on this page and
                shared with the church community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonies-cta">
        <h2>Come and Create Your Own Testimony</h2>
        <p>Join us this Sunday and experience God for yourself.</p>
        <a href="/contact">
          <button className="testimonies-btn-white">Plan Your Visit</button>
        </a>
      </section>

    </div>
  );
}

export default Testimonies;