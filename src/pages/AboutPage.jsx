import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaCar, FaUsers, FaRoute, FaMapMarkerAlt, FaPhone, FaAward, FaHandshake } from 'react-icons/fa'

function AboutPage() {
  return (
    <div className="route-detail-page">
      {/* Hero */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.85), rgba(255, 107, 0, 0.6)), url(https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=1200&h=500&fit=crop)` }}>
        <div className="container">
          <Link to="/" className="back-btn"><span>←</span> Back to Home</Link>
          <h1>About Shreenath Krupa Cabs</h1>
          <p className="route-hero-subtitle">Your Trusted Travel Partner Since 2014</p>
        </div>
      </section>

      {/* About Content */}
      <section className="route-about">
        <div className="container">
          <div className="about-content-full">
            <h2>Who We Are</h2>
            <p className="route-description">
              Shreenath Krupa Cabs is a leading cab and tour service provider based in Pune, Maharashtra. 
              With over 10 years of experience in the travel industry, we have served more than 15,000 happy 
              customers with our reliable, affordable, and comfortable cab services across Maharashtra and India.
            </p>
            <p className="route-about-text">
              We started our journey with a single car and a vision to provide the best travel experience to our 
              customers. Today, we operate a fleet of 50+ well-maintained vehicles ranging from economical sedans 
              to luxury SUVs and tempo travellers. Our team of professional drivers is trained to ensure your safety, 
              comfort, and punctuality on every trip.
            </p>
            <p className="route-about-text">
              Whether you need a local cab for a quick city ride, an outstation trip for a weekend getaway, airport 
              transfers, or customized tour packages, Shreenath Krupa Cabs is your one-stop solution for all travel needs.
            </p>

            {/* Stats */}
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <FaUsers className="about-stat-icon" />
                <h3>15,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="about-stat-item">
                <FaCar className="about-stat-icon" />
                <h3>50+</h3>
                <p>Vehicles in Fleet</p>
              </div>
              <div className="about-stat-item">
                <FaRoute className="about-stat-icon" />
                <h3>100+</h3>
                <p>Routes Covered</p>
              </div>
              <div className="about-stat-item">
                <FaAward className="about-stat-icon" />
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>

            {/* Our Values */}
            <h2 style={{ marginTop: '50px' }}>Our Values</h2>
            <div className="about-values-grid">
              <div className="about-value-card">
                <FaHandshake className="value-icon" />
                <h4>Trust & Reliability</h4>
                <p>We believe in building long-term relationships with our customers through consistent, reliable service.</p>
              </div>
              <div className="about-value-card">
                <FaCheckCircle className="value-icon" />
                <h4>Safety First</h4>
                <p>All our vehicles are GPS-tracked, regularly serviced, and driven by verified professional drivers.</p>
              </div>
              <div className="about-value-card">
                <FaMapMarkerAlt className="value-icon" />
                <h4>Customer Comfort</h4>
                <p>From clean vehicles to courteous drivers, every detail is optimized for your comfort and satisfaction.</p>
              </div>
              <div className="about-value-card">
                <FaPhone className="value-icon" />
                <h4>24/7 Support</h4>
                <p>Our dedicated support team is available round the clock to assist you with any queries or bookings.</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <h2 style={{ marginTop: '50px' }}>Why Customers Choose Us</h2>
            <ul className="route-highlights">
              <li><FaCheckCircle className="check-icon" /> Transparent pricing with no hidden charges</li>
              <li><FaCheckCircle className="check-icon" /> Well-maintained and sanitized vehicles</li>
              <li><FaCheckCircle className="check-icon" /> Experienced and background-verified drivers</li>
              <li><FaCheckCircle className="check-icon" /> Flexible cancellation and rescheduling</li>
              <li><FaCheckCircle className="check-icon" /> Multiple payment options available</li>
              <li><FaCheckCircle className="check-icon" /> Dedicated account managers for corporate clients</li>
              <li><FaCheckCircle className="check-icon" /> Real-time trip tracking for safety</li>
              <li><FaCheckCircle className="check-icon" /> Complimentary water and first-aid kit in every cab</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="route-cta">
        <div className="container">
          <h2>Ready to Experience Our Service?</h2>
          <p>Book your cab today and see why thousands of customers trust Shreenath Krupa Cabs!</p>
          <div className="route-cta-buttons">
            <a href="tel:+918485800099" className="btn-primary">📞 Call Now</a>
            <a href="https://wa.me/917796003200?text=Hi, I want to book a cab" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">💬 WhatsApp Us</a>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
