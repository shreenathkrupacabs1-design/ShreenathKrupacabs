import React from 'react'
import { FaShieldAlt, FaClock, FaMoneyBillWave, FaHeadset, FaUserTie, FaThumbsUp } from 'react-icons/fa'

function WhyUs() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Secure',
      description: 'All our vehicles are GPS tracked and drivers are verified. Your safety is our priority.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Availability',
      description: 'Round the clock cab service. Book anytime, travel anytime. We are always available.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Best Pricing',
      description: 'Transparent pricing with no hidden charges. Best rates guaranteed for all trips.'
    },
    {
      icon: <FaHeadset />,
      title: 'Customer Support',
      description: 'Dedicated support team available 24/7 to assist you with bookings and queries.'
    },
    {
      icon: <FaUserTie />,
      title: 'Expert Drivers',
      description: 'Experienced and courteous drivers who know every route. Licensed and well-trained.'
    },
    {
      icon: <FaThumbsUp />,
      title: 'Clean & Maintained',
      description: 'All cabs are regularly serviced, sanitized and maintained for comfortable travel.'
    }
  ]

  return (
    <section className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>We provide the best travel experience with premium service and affordable rates</p>
        </div>
        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <div className="why-us-card" key={index}>
              <div className="icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
