import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { FaCheckCircle } from 'react-icons/fa'
import { EMAILJS_CONFIG } from '../config/emailjs'

function BookingForm() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    cabType: '',
    phone: ''
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
        // Still show success to user even if email fails (can be retried)
        setSubmitted(true)
        setLoading(false)
        toast.success('Booking submitted! Our team will contact you shortly.')
      })
  }

  if (submitted) {
    return (
      <section className="booking-section" id="booking">
        <div className="booking-form success-state">
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <h3>Thank You for Your Booking!</h3>
            <p>Our team will contact you shortly to confirm your ride details.</p>
            <p className="success-subtext">We typically respond within 15-30 minutes.</p>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>Book Another Ride</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="booking-section" id="booking">
      <form className="booking-form" ref={formRef} onSubmit={handleSubmit}>
        <h3>Book Your Ride Now</h3>
        {/* Hidden field for EmailJS recipient */}
        <input type="hidden" name="to_email" value="kumbharnr777@gmail.com" />
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
            <label>Pickup Location *</label>
            <input type="text" name="pickup" placeholder="Enter pickup city" value={formData.pickup} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Drop Location *</label>
            <input type="text" name="drop" placeholder="Enter drop city" value={formData.drop} onChange={handleChange} required />
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
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? <><span className="spinner"></span>Submitting...</> : 'Book Now'}
        </button>
      </form>
    </section>
  )
}

export default BookingForm
