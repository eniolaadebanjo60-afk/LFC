import { useState } from 'react';
import './Contact.css';
 
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
 
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  }
 
  function handleSubmit() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
 
    const existing = JSON.parse(localStorage.getItem('lfc_messages') || '[]');
    const newMessage = {
      ...form,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
      }),
      id: Date.now(),
    };
    localStorage.setItem('lfc_messages', JSON.stringify([...existing, newMessage]));
    setSubmitted(true);
  }
 
  return (
    <div className="contact-page">
 
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-label">We'd Love to Hear from You</span>
          <h1>Get in Touch<br />With Us</h1>
          <p>
            Whether you have a question, need prayer, or just want to
            know more about us — our doors are always open.
          </p>
        </div>
      </section>
 
      <section className="contact-main">
        <div className="contact-container">

          <div className="contact-info">
            <span className="contact-label">Find Us</span>
            <h2>Living Faith Church Orimerunmu</h2>
 
            <div className="info-blocks">
              <div className="info-block">
                <div className="info-block-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Orimerunmu, Ogun State, Nigeria</p>
                </div>
              </div>
 
              <div className="info-block">
                <div className="info-block-icon">🕐</div>
                <div>
                  <strong>Service Times</strong>
                  <p>Sunday Service — 9:00 AM</p>
                  <p>Midweek Service — Wednesday 6:00 PM</p>
                </div>
              </div>
 
              <div className="info-block">
                <div className="info-block-icon">✉</div>
                <div>
                  <strong>Email Us</strong>
                  <p>livingfaithorimerunmu@gmail.com</p>
                </div>
              </div>
 
              <div className="info-block">
                <div className="info-block-icon">📞</div>
                <div>
                  <strong>Call Us</strong>
                  <p>+234 000 000 0000</p>
                </div>
              </div>
            </div>
 
            <div className="contact-note">
              <div className="note-bar"></div>
              <p>
                You are always welcome. Come as you are — no dress code,
                no prior experience required. Just bring an open heart.
              </p>
            </div>
          </div>
 
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>. We have received
                  your message and will get back to you as soon as possible.
                  God bless you!
                </p>
                <button
                  className="contact-btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <p>We typically respond within 24 hours.</p>
 
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 000 000 0000"
                    />
                  </div>
                </div>
 
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
 
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                  />
                </div>
 
                {error && <div className="form-error">{error}</div>}
 
                <button className="contact-btn" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            )}
          </div>
 
        </div>
      </section>
 
      <section className="contact-strip">
        <div className="strip-grid">
          <div className="strip-item">
            <strong>Sunday Service</strong>
            <span>9:00 AM</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-item">
            <strong>Midweek Service</strong>
            <span>Wednesday 6:00 PM</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-item">
            <strong>Location</strong>
            <span>Orimerunmu, Ogun State</span>
          </div>
        </div>
      </section>
 
    </div>
  );
}
 
export default Contact;
 