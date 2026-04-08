import { useState } from 'react';
import './Newsletter.css';
 
function Newsletter() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
 
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  }
 
  function handleSubmit() {
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please fill in both your name and email.');
      return;
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
 
    const existing = JSON.parse(localStorage.getItem('lfc_subscribers') || '[]');
    const alreadySubscribed = existing.find((s) => s.email === form.email);
 
    if (alreadySubscribed) {
      setError('This email is already subscribed!');
      return;
    }
 
    const newSubscriber = {
      ...form,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
      }),
    };
 
    localStorage.setItem(
      'lfc_subscribers',
      JSON.stringify([...existing, newSubscriber])
    );
 
    setSubmitted(true);
  }
 
  return (
    <div className="newsletter-page">
 
      <section className="newsletter-hero">
        <div className="newsletter-hero-inner">
          <span className="newsletter-label">Stay Connected</span>
          <h1>Join Our Newsletter</h1>
          <p>
            Get the latest sermons, devotionals, announcements, and
            encouragement delivered straight to your inbox.
          </p>
        </div>
      </section>
 
      <section className="newsletter-main">
        <div className="newsletter-container">
 
          <div className="newsletter-info">
            <span className="newsletter-label">Why Subscribe?</span>
            <h2>Never Miss What God Is Doing</h2>
            <div className="info-points">
              <div className="info-point">
                <div className="point-icon">✦</div>
                <div>
                  <strong>Weekly Devotionals</strong>
                  <p>Short, powerful messages to start your week in faith.</p>
                </div>
              </div>
              <div className="info-point">
                <div className="point-icon">✦</div>
                <div>
                  <strong>Church Announcements</strong>
                  <p>Be the first to know about events, programmes, and updates.</p>
                </div>
              </div>
              <div className="info-point">
                <div className="point-icon">✦</div>
                <div>
                  <strong>Sermon Highlights</strong>
                  <p>Key takeaways from our Sunday and midweek services.</p>
                </div>
              </div>
              <div className="info-point">
                <div className="point-icon">✦</div>
                <div>
                  <strong>Prayer Points</strong>
                  <p>Join the church in focused, corporate prayer every week.</p>
                </div>
              </div>
            </div>
          </div>
 
          <div className="newsletter-form-wrap">
            {submitted ? (
              <div className="success-card">
                <div className="success-icon">✓</div>
                <h3>You're subscribed!</h3>
                <p>
                  Welcome to the Living Faith Church newsletter, <strong>{form.name}</strong>!
                  We are glad to have you. Check your inbox soon.
                </p>
                <button
                  className="newsletter-btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '' }); }}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <div className="newsletter-form">
                <h3>Subscribe Today</h3>
                <p>Join hundreds of members receiving weekly inspiration.</p>
 
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Adebanjo Emmanuel"
                  />
                </div>
 
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. you@example.com"
                  />
                </div>
 
                {error && <div className="form-error">{error}</div>}
 
                <button className="newsletter-btn" onClick={handleSubmit}>
                  Subscribe Now
                </button>
 
                <p className="form-note">
                  No spam. Ever. Unsubscribe at any time.
                </p>
              </div>
            )}
          </div>
 
        </div>
      </section>
 
      <section className="newsletter-strip">
        <div className="strip-inner">
          <p>Already part of our church family?</p>
          <a href="/contact">
            <button className="newsletter-btn-white">Get in Touch</button>
          </a>
        </div>
      </section>
 
    </div>
  );
}
 
export default Newsletter;
 