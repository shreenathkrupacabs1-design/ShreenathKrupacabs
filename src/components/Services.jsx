import React from 'react'
import { Link } from 'react-router-dom'
import { FaCar, FaRoute, FaPlane, FaMapMarkedAlt, FaUsers, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

function Services() {
  const services = [
    {
      id: 'local-cab-service',
      icon: <FaCar />,
      title: 'Local Cab Service',
      description: 'Comfortable and affordable local cab service for city travel. Available 24/7 with professional drivers.'
    },
    {
      id: 'outstation-trips',
      icon: <FaRoute />,
      title: 'Outstation Trips',
      description: 'One-way and round trip outstation cab services at best rates. Travel across Maharashtra and India.'
    },
    {
      id: 'airport-transfer',
      icon: <FaPlane />,
      title: 'Airport Transfer',
      description: 'Timely and reliable airport pickup and drop services. Track your flight and we will be there on time.'
    },
    {
      id: 'tour-packages',
      icon: <FaMapMarkedAlt />,
      title: 'Tour Packages',
      description: 'Customized tour packages for pilgrimage, honeymoon, family trips & corporate outings across India.'
    },
    {
      id: 'corporate-travel',
      icon: <FaUsers />,
      title: 'Corporate Travel',
      description: 'Dedicated corporate cab services with monthly billing, employee transport, and business travel solutions.'
    },
    {
      id: 'event-wedding',
      icon: <FaCalendarAlt />,
      title: 'Event & Wedding',
      description: 'Special cab arrangements for weddings, events, and ceremonies. Decorated cars available on request.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a wide range of travel services to make your journey comfortable and memorable</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={`/service/${service.id}`} className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">Learn More <FaArrowRight /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
