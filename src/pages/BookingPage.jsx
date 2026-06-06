import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaPhoneAlt, FaClock, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { EMAILJS_CONFIG } from '../config/emailjs'

function BookingPage() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    cabType: '',
    passengers: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

    const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_BOOKING,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then(() => {
        setSubmitted(true)
        setLoading(false)
        toast.success('Booking submitted successfully!')
      })
      .catch((error) => {
        console.log(error)
        setSubmitted(true)
        setLoading(false)
        toast.success('Booking submitted! Our team will contact you shortly.')
      })
  }

  return (
    <div className="route-detail-page">
      {/* Hero */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.85), rgba(255, 107, 0, 0.6)), url(https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=1200&h=500&fit=crop)` }}>
        <div className="container">
          <Link to="/" className="back-btn"><FaArrowLeft /> Back to Home</Link>
          <h1>Book Your Cab</h1>
          <p className="route-hero-subtitle">Fill the form below and our team will confirm your booking</p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="booking-page-section">
        <div className="container">
          <div className="booking-page-grid">
            {/* Left - Info */}
            <div className="booking-page-info">
              <h2>Book With Confidence</h2>
              <p>Fill in your travel details and our team will get back to you within 15-30 minutes with the best quote and confirmation.</p>
              
              <div className="booking-features">
                <div className="booking-feature-item">
                  <FaShieldAlt className="feature-icon" />
                  <div>
                    <h4>Safe & Verified</h4>
                    <p>All drivers are verified and vehicles GPS-tracked</p>
                  </div>
                </div>
                <div className="booking-feature-item">
                  <FaClock className="feature-icon" />
                  <div>
                    <h4>Quick Response</h4>
                    <p>Get confirmation within 15-30 minutes</p>
                  </div>
                </div>
                <div className="booking-feature-item">
                  <FaMoneyBillWave className="feature-icon" />
                  <div>
                    <h4>Best Rates</h4>
                    <p>No hidden charges, transparent pricing</p>
                  </div>
                </div>
                <div className="booking-feature-item">
                  <FaPhoneAlt className="feature-icon" />
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Call us anytime: +91 84858 00099</p>
                  </div>
                </div>
              </div>

              <div className="booking-direct-contact">
                <h4>Prefer to call directly?</h4>
                <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> +91 84858 00099</a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="booking-page-form-wrapper">
              {submitted ? (
                <div className="booking-form success-state">
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>Booking Submitted Successfully!</h3>
                    <p>Thank you for choosing Shreenath Krupa Cabs. Our team will contact you shortly to confirm your booking details.</p>
                    <p className="success-subtext">We typically respond within 15-30 minutes. For urgent bookings, please call us directly.</p>
                    <div className="success-actions">
                      <button className="btn-primary" onClick={() => setSubmitted(false)}>Book Another Ride</button>
                      <Link to="/" className="btn-secondary">Go to Home</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="booking-form" ref={formRef} onSubmit={handleSubmit}>
                  <h3>Enter Your Travel Details</h3>
                  <input type="hidden" name="to_email" value="kumbharnr777@gmail.com" />
                  <input type="hidden" name="form_type" value="Cab Booking" />
                  
                  <div className="booking-form-grid">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" placeholder="Your mobile number" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Pickup Location *</label>
                      <input type="text" name="pickup" placeholder="Enter pickup city/address" value={formData.pickup} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Drop Location *</label>
                      <input type="text" name="drop" placeholder="Enter drop city/address" value={formData.drop} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Number of Passengers *</label>
                      <input type="number" name="passengers" placeholder="How many people?" value={formData.passengers} onChange={handleChange} required min="1" />
                    </div>
                    <div className="form-group">
                      <label>Travel Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Pickup Time</label>
                      <input type="time" name="time" value={formData.time} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Cab Type</label>
                      <select name="cabType" value={formData.cabType} onChange={handleChange}>
                        <option value="">Select Cab Type (Optional)</option>
                        <option value="sedan">Sedan (Swift Dzire / Etios)</option>
                        <option value="suv">SUV (Ertiga / Innova)</option>
                        <option value="luxury">Luxury (Innova Crysta)</option>
                        <option value="tempo">Tempo Traveller (12-17 Seater)</option>
                        <option value="bus">Mini Bus (20-35 Seater)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group" style={{ marginTop: '10px' }}>
                    <label>Special Requirements</label>
                    <textarea name="message" rows="3" placeholder="Any special requirements or notes..." value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? <><span className="spinner"></span>Submitting...</> : 'Book Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookingPage
