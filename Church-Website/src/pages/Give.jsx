import { useState } from 'react';
import './Give.css';
import { FaBuilding } from 'react-icons/fa6';
import { FaEarthAfrica } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa6';
import { FaHandHoldingDollar } from 'react-icons/fa6';

const bankDetails = [
  {
    id: 1,
    bankName: "First Bank of Nigeria",
    accountName: "Living Faith Church Orimerunmu",
    accountNumber: "0123456789",
  },
  {
    id: 2,
    bankName: "Guaranty Trust Bank",
    accountName: "Living Faith Church Orimerunmu",
    accountNumber: "0987654321",
  },
];

const givingCategories = [
  { label: "Tithe", icon: <FaHandHoldingHeart />, description: "Honour God with the first tenth of your income." },
  { label: "Offering", icon: <FaHandHoldingDollar /> , description: "A free-will gift to support the work of the church." },
  { label: "Building Fund", icon: <FaBuilding />, description: "Help us build a bigger house for God." },
  { label: "Missions", icon: <FaEarthAfrica />, description: "Support the spread of the gospel beyond our walls." },
];

function Give() {
  const [copied, setCopied] = useState(null);

  function handleCopy(text, id) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="give-page">
      <section className="give-hero">
        <div className="give-hero-inner">
          <span className="give-label">Give</span>
          <h1>Sow a Seed,<br />Reap a Harvest</h1>
          <p>
            Your giving fuels our mission — reaching lives, building faith,
            and opening doors of divine opportunity in our community and beyond.
          </p>
        </div>
      </section>

      <section className="give-why">
        <div className="give-why-inner">
          <span className="give-label centered">The Word Says</span>
          <blockquote>
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <cite>— 2 Corinthians 9:7</cite>
        </div>
      </section>

      <section className="give-categories">
        <span className="give-label centered">Ways to Give</span>
        <h2>Choose Your Giving Category</h2>
        <div className="categories-grid">
          {givingCategories.map((cat) => (
            <div className="category-card" key={cat.label}>
              <div className="category-icon">{cat.icon}</div>
              <strong>{cat.label}</strong>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="give-bank-section">
        <div className="give-bank-inner">
          <div className="give-bank-text">
            <span className="give-label">Bank Transfer</span>
            <h2>Give via Bank Transfer</h2>
            <p>
              Transfer directly to any of the accounts below. After transferring,
              please send us a message with your name, amount, and the category
              of your giving so we can acknowledge your gift.
            </p>
            <div className="bank-steps">
              <div className="bank-step">
                <div className="step-number">1</div>
                <p>Choose a giving category above</p>
              </div>
              <div className="bank-step">
                <div className="step-number">2</div>
                <p>Transfer to any account below</p>
              </div>
              <div className="bank-step">
                <div className="step-number">3</div>
                <p>Send us your name & amount via the Contact page</p>
              </div>
            </div>
          </div>

          <div className="give-bank-cards">
            {bankDetails.map((bank) => (
              <div className="bank-card" key={bank.id}>
                <div className="bank-top">
                  <div className="bank-name">{bank.bankName}</div>
                </div>
                <div className="bank-account-name">{bank.accountName}</div>
                <div className="bank-number-row">
                  <span className="bank-number">{bank.accountNumber}</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(bank.accountNumber, bank.id)}
                  >
                    {copied === bank.id ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}

            <div className="bank-note">
              <div className="note-bar"></div>
              <p>
                All gifts are received with gratitude and used entirely
                for the work of God at Living Faith Church Orimerunmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="give-cta">
        <h2>Every Gift Makes a Difference</h2>
        <p>Your generosity helps us reach more lives, build more faith, and open more doors.</p>
        <a href="/contact">
          <button className="give-btn-white">Contact Us</button>
        </a>
      </section>

    </div>
  );
}
 export default Give