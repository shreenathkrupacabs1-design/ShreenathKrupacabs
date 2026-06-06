import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Your Trusted Travel Partner<br />For Every Journey</h1>
        <p>Reliable cab services for local trips, outstation travel, airport transfers & tour packages across India</p>
        <div className="hero-buttons">
          <Link to="/booking" className="btn-primary">Book a Cab</Link>
          <a href="#callback" className="btn-outline">Request Callback</a>
          <a href="tel:+918485800099" className="btn-outline">Call Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
