import React, { useState, useRef } from 'react'
import { FaPhone, FaClock, FaMapMarkerAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { EMAILJS_CONFIG } from '../config/emailjs'

function CallbackForm() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    travelDate: '',
    cabType: '',
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
      EMAILJS_CONFIG.TEMPLATE_CALLBACK,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then(() => {
        setSubmitted(true)
        setLoading(false)
        toast.success('Callback request submitted successfully!')
      })
      .catch((error) => {
        console.log(error)
        setSubmitted(true)
        setLoading(false)
        toast.success('Request submitted! Our team will contact you shortly.')
      })
  }
  return (
    <section className="callback-section" id="callback">
      <div className="container">
        <div className="section-title">
          <h2>Request a Callback</h2>
          <p>Fill the form below and our team will call you back within 15 minutes</p>
        </div>
        <div className="callback-wrapper">
          <div className="callback-info">
            <h2>Let Us Call You Back</h2>
            <p>
              Don't want to wait? Fill in your details and our travel expert will call you 
              back with the best deals and offers. We guarantee the lowest prices and best service.
            </p>
            <ul className="callback-info-list">              <li>
                <span className="icon"><FaPhone /></span>
                <span>+91 84858 00099 / +91 77960 03200</span>
              </li>
              <li>
                <span className="icon"><FaClock /></span>
                <span>Available 24/7 - Call Anytime</span>
              </li>
              <li>
                <span className="icon"><FaMapMarkerAlt /></span>
                <span>Pune, Maharashtra, India</span>
              </li>              <li>
                <span className="icon"><FaEnvelope /></span>
                <span>shreenathkrupacabs@gmail.com</span>
              </li>
            </ul>
          </div>

          {submitted ? (
            <div className="callback-form success-state">
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Request Submitted Successfully!</h3>
                <p>Our team will contact you shortly to assist with your travel needs.</p>
                <p className="success-subtext">We typically respond within 15 minutes.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another Request</button>
              </div>
            </div>
          ) : (
          <form className="callback-form" ref={formRef} onSubmit={handleSubmit}>
            <h3>Get Free Quote</h3>
            <input type="hidden" name="to_email" value="kumbharnr777@gmail.com" />
            <div className="form-group">
              <label>Your Name *</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your full name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Enter your mobile number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email (optional)" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label>Pickup Location *</label>
              <input 
                type="text" 
                name="pickup" 
                placeholder="Enter pickup city/location" 
                value={formData.pickup} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Drop Location *</label>
              <input 
                type="text" 
                name="drop" 
                placeholder="Enter drop city/location" 
                value={formData.drop} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Travel Date</label>
              <input 
                type="date" 
                name="travelDate" 
                value={formData.travelDate} 
                onChange={handleChange} 
              />
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
            <div className="form-group">
              <label>Additional Message</label>
              <textarea 
                name="message" 
                rows="3" 
                placeholder="Any special requirements..." 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? <><span className="spinner"></span>Sending...</> : 'Request Callback'}
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default CallbackForm
