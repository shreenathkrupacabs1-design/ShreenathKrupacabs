import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaClock, FaRoad, FaCar, FaUsers, FaSuitcase, FaSnowflake, FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa'
import { routesData } from '../data/routesData'
import { useState } from 'react'

function RouteDetail() {
  const { routeId } = useParams()
  const route = routesData.find(r => r.id === routeId)
  const [openFaq, setOpenFaq] = useState(null)

  if (!route) {
    return (
      <div className="route-detail-page">
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h2>Route Not Found</h2>
          <p>The route you are looking for does not exist.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Go Back Home</Link>
        </div>
      </div>
    )
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const whatsappMessage = `Hi, I want to book a cab from ${route.from} to ${route.to}. Please share details.`

  return (
    <div className="route-detail-page">
      {/* Hero Banner */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(255, 107, 0, 0.6)), url(${route.image})` }}>
        <div className="container">
          <Link to="/" className="back-btn"><FaArrowLeft /> Back to Home</Link>
          <h1>{route.from} to {route.to} Cab Service</h1>
          <p className="route-hero-subtitle">Comfortable & Affordable Cab Booking</p>
          <div className="route-hero-stats">
            <div className="stat-item">
              <FaRoad />
              <span>{route.distance}</span>
            </div>
            <div className="stat-item">
              <FaClock />
              <span>{route.duration}</span>
            </div>
            <div className="stat-item">
              <FaCar />
              <span>AC Cabs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Strip */}
      <section className="quick-booking-strip">
        <div className="container">
          <div className="strip-content">
            <p>Book your <strong>{route.from} to {route.to}</strong> cab now!</p>
            <div className="strip-buttons">
              <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call Now</a>
              <a href={`https://wa.me/917796003200?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Route Section */}
      <section className="route-about">
        <div className="container">
          <div className="route-about-grid">
            <div className="route-about-content">
              <h2>{route.from} to {route.to} Cab Booking</h2>
              <p className="route-description">{route.description}</p>
              <p className="route-about-text">{route.aboutRoute}</p>
              
              <h3>Why Book With Shreenath Krupa Cabs?</h3>
              <ul className="route-highlights">
                {route.highlights.map((item, index) => (
                  <li key={index}><FaCheckCircle className="check-icon" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Sidebar Booking Form */}
            <div className="route-sidebar">
              <div className="sidebar-booking-form">
                <h3>Get Free Quote</h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const name = formData.get('name')
                  const phone = formData.get('phone')
                  const date = formData.get('date')
                  const msg = `Booking Request:%0ARoute: ${route.from} to ${route.to}%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}`
                  window.open(`https://wa.me/917796003200?text=${msg}`, '_blank')
                }}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <input type="date" name="date" required />
                  </div>
                  <div className="form-group">
                    <select name="cabType" required>
                      <option value="">Select Cab Type</option>
                      {route.vehicles.map((v, i) => (
                        <option key={i} value={v.type}>{v.type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Any special requirements..." rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Get Quote on WhatsApp</button>
                </form>
              </div>              {/* Contact Card */}
              <div className="sidebar-contact">
                <h4>Need Help Booking?</h4>
                <p>Call us 24/7 for instant booking</p>
                <a href="tel:+918485800099" className="contact-number"><FaPhoneAlt /> +91 84858 00099</a>
                <a href="tel:+917796003200" className="contact-number"><FaPhoneAlt /> +91 77960 03200</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="route-vehicles">
        <div className="container">
          <h2>Available Vehicles for {route.from} to {route.to}</h2>
          <div className="vehicles-table-wrapper">
            <table className="vehicles-table">
              <thead>
                <tr>
                  <th><FaCar /> Vehicle Type</th>
                  <th><FaUsers /> Capacity</th>
                  <th><FaSuitcase /> Luggage</th>
                  <th><FaSnowflake /> AC</th>
                  <th>Action</th>
                </tr>
              </thead>              <tbody>
                {route.vehicles.map((vehicle, index) => (
                  <tr key={index}>
                    <td><strong>{vehicle.type}</strong></td>
                    <td>{vehicle.capacity}</td>
                    <td>{vehicle.luggage}</td>
                    <td>{vehicle.ac}</td>
                    <td>
                      <Link to="/booking" className="btn-book-sm">Book Now</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Stops */}
      <section className="route-stops">
        <div className="container">
          <h2>Popular Stops on {route.from} to {route.to} Route</h2>
          <div className="stops-grid">
            {route.popularStops.map((stop, index) => (
              <div className="stop-chip" key={index}>
                <FaMapMarkerAlt /> {stop}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="route-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {route.faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h4>{faq.q}</h4>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Routes */}
      <section className="other-routes">
        <div className="container">
          <h2>Explore Other Popular Routes</h2>
          <div className="other-routes-grid">
            {routesData.filter(r => r.id !== routeId).slice(0, 6).map((r, index) => (
              <Link to={`/route/${r.id}`} className="other-route-card" key={index}>
                <FaMapMarkerAlt />
                <span>{r.from} → {r.to}</span>
                <small>{r.distance} | {r.duration}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="route-cta">
        <div className="container">
          <h2>Ready to Book Your {route.from} to {route.to} Cab?</h2>
          <p>Get the best rates with Shreenath Krupa Cabs. Call now for instant booking!</p>
          <div className="route-cta-buttons">
            <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call Now</a>
            <a href={`https://wa.me/917796003200?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><FaWhatsapp /> Book on WhatsApp</a>
            <Link to="/" className="btn-secondary">View All Routes</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RouteDetail
