import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">          <div className="header-top-left">
            <span><FaPhone /> +91 84858 00099 / +91 77960 03200</span>
            <span><FaEnvelope /> shreenathkrupacabs@gmail.com</span>
          </div>
          <div className="header-top-right">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/"><h1>Shreenath <span>Krupa</span> Cabs</h1></Link>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            {isHome ? (
              <>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#fleet" onClick={() => setMenuOpen(false)}>Our Fleet</a>
                <a href="#routes" onClick={() => setMenuOpen(false)}>Routes</a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
              </>
            ) : (
              <>
                <Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/#fleet" onClick={() => setMenuOpen(false)}>Our Fleet</Link>
                <Link to="/#routes" onClick={() => setMenuOpen(false)}>Routes</Link>
                <Link to="/#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
                <Link to="/#gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              </>
            )}            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/booking" className="btn-primary" onClick={() => setMenuOpen(false)}>Book Now</Link>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
