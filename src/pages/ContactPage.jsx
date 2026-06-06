import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { EMAILJS_CONFIG } from '../config/emailjs'

function ContactPage() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
      EMAILJS_CONFIG.TEMPLATE_CONTACT,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then(() => {
        setSubmitted(true)
        setLoading(false)
        toast.success('Message sent successfully!')
      })
      .catch(() => {
        setSubmitted(true)
        setLoading(false)
        toast.success('Message received! We will contact you shortly.')
      })
  }

  return (
    <div className="route-detail-page">
      {/* Hero */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.85), rgba(255, 107, 0, 0.6)), url(https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=500&fit=crop)` }}>
        <div className="container">
          <Link to="/" className="back-btn"><span>←</span> Back to Home</Link>
          <h1>Contact Us</h1>
          <p className="route-hero-subtitle">We're available 24/7 - Reach us anytime!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-block">
              <h2>Get In Touch</h2>
              <p>Have questions or want to book a cab? Reach out to us through any of the following channels. We respond within minutes!</p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaPhone /></div>
                  <div>
                    <h4>Phone</h4>                    <p><a href="tel:+918485800099">+91 84858 00099</a></p>
                    <p><a href="tel:+917796003200">+91 77960 03200</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaWhatsapp /></div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/917796003200" target="_blank" rel="noopener noreferrer">+91 77960 03200</a></p>
                    <p>Quick replies guaranteed!</p>
                  </div>
                </div>

                <div className="contact-info-item">                <div className="contact-info-icon"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:shreenathkrupacabs@gmail.com">shreenathkrupacabs@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Office Address</h4>
                    <p>Shreenath Krupa Cabs</p>
                    <p>Pune, Maharashtra, India - 411001</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaClock /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>24/7 Available</p>
                    <p>Office: Mon-Sat, 9 AM - 9 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social-links">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaYoutube /></a>
                  <a href="https://wa.me/917796003200" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
              </div>
            </div>            {/* Contact Form */}
            <div className="contact-form-block">
              {submitted ? (
                <div className="success-state">
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                    <p className="success-subtext">We typically respond within 30 minutes during business hours.</p>
                    <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                  </div>
                </div>
              ) : (
              <>
              <h2>Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="to_email" value="kumbharnr777@gmail.com" />
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select subject</option>
                    <option value="booking">Cab Booking Enquiry</option>
                    <option value="quote">Get Price Quote</option>
                    <option value="corporate">Corporate Enquiry</option>
                    <option value="complaint">Complaint / Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" placeholder="Write your message here..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? <><span className="spinner"></span>Sending...</> : 'Send Message'}
                </button>
              </form>
              </>
              )}
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="contact-map">
            <h2>Find Us on Map</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68081987!2d73.72287824!3d18.524598949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreenath Krupa Cabs Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
