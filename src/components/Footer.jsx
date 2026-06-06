import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Shreenath Krupa Cabs</h3>
            <p>
              Your trusted travel partner for local, outstation, airport transfers, 
              and tour packages. We provide safe, reliable, and affordable cab services 
              across Maharashtra and India.
            </p>
            <div className="footer-social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="https://wa.me/917796003200" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/route/pune-to-mumbai-cab">Pune to Mumbai</Link></li>
              <li><Link to="/route/pune-to-shirdi-cab">Pune to Shirdi</Link></li>
              <li><Link to="/route/pune-to-goa-cab">Pune to Goa</Link></li>
              <li><Link to="/route/pune-to-lonavala-cab">Pune to Lonavala</Link></li>
              <li><Link to="/route/pune-to-mahabaleshwar-cab">Pune to Mahabaleshwar</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/service/local-cab-service">Local Cab Service</Link></li>
              <li><Link to="/service/outstation-trips">Outstation Trips</Link></li>
              <li><Link to="/service/airport-transfer">Airport Transfer</Link></li>
              <li><Link to="/service/tour-packages">Tour Packages</Link></li>
              <li><Link to="/service/corporate-travel">Corporate Travel</Link></li>
              <li><Link to="/service/event-wedding">Event & Wedding Cars</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">              <li>
                <span className="icon"><FaPhone /></span>
                <span><a href="tel:+918485800099">+91 84858 00099</a><br /><a href="tel:+917796003200">+91 77960 03200</a></span>
              </li>
              <li>
                <span className="icon"><FaEnvelope /></span>
                <span><a href="mailto:shreenathkrupacabs@gmail.com">shreenathkrupacabs@gmail.com</a></span>
              </li>
              <li>
                <span className="icon"><FaMapMarkerAlt /></span>
                <span>Pune, Maharashtra, India - 411001</span>
              </li>
              <li>
                <span className="icon"><FaClock /></span>
                <span>24/7 Available - Book Anytime</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shreenath Krupa Cabs. All Rights Reserved. | Designed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
