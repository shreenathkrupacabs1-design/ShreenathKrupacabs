import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa'

function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/917796003200?text=Hi%2C%20I%20want%20to%20book%20a%20cab" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call Float Button */}
      <a 
        href="tel:+918485800099" 
        className="call-float"
        title="Call Us Now"
      >
        <FaPhone />
      </a>

      {/* Scroll to Top */}
      <div 
        className={`scroll-top ${showScroll ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Back to Top"
      >
        <FaArrowUp />
      </div>
    </>
  )
}

export default FloatingButtons
