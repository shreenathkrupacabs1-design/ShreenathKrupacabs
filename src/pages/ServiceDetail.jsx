import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaCar, FaRoute, FaPlane, FaMapMarkedAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa'

const servicesData = {
  'local-cab-service': {
    title: 'Local Cab Service',
    icon: <FaCar />,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=400&fit=crop',
    description: 'Shreenath Krupa Cabs offers reliable and affordable local cab services for city travel in Pune and Mumbai. Whether you need a cab for shopping, hospital visits, meetings, or daily commute, we are just a call away.',
    features: [
      '24/7 availability for local trips',
      'Affordable hourly and km-based packages',
      'Professional and courteous drivers',
      'AC Sedan, SUV, and Luxury options',
      'GPS-tracked vehicles for safety',
      'No surge pricing - fixed transparent rates',
      'Instant booking via call or WhatsApp',
      'Corporate accounts with monthly billing'
    ],
    packages: [
      { name: '4 Hours / 40 km', desc: 'Perfect for short local trips, shopping, or hospital visits' },
      { name: '8 Hours / 80 km', desc: 'Full day local usage for meetings, sightseeing, or errands' },
      { name: '12 Hours / 120 km', desc: 'Extended day package for weddings, events, or full-day needs' },
      { name: 'Monthly Package', desc: 'Dedicated cab for daily office commute with fixed monthly billing' }
    ]
  },
  'outstation-trips': {
    title: 'Outstation Trips',
    icon: <FaRoute />,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop',
    description: 'Plan your intercity travel with Shreenath Krupa Cabs. We offer one-way and round-trip outstation cab services at the best rates across Maharashtra and India. Enjoy comfortable highway rides with experienced drivers.',
    features: [
      'One-way and round-trip options',
      'Experienced highway drivers',
      'All toll and parking charges included',
      'Multiple vehicle options available',
      'Flexible pickup timing - 24/7',
      'Multi-city trip packages',
      'No hidden charges - all-inclusive pricing',
      'Free cancellation up to 24 hours before trip'
    ],
    packages: [
      { name: 'One-Way Trip', desc: 'Travel to your destination with per-km charges. No return fare.' },
      { name: 'Round Trip', desc: 'Go and return in the same cab. Waiting charges apply for halt days.' },
      { name: 'Multi-City Tour', desc: 'Cover multiple destinations in one trip with customized itinerary.' },
      { name: 'Corporate Outstation', desc: 'Business travel packages with priority booking and billing.' }
    ]
  },
  'airport-transfer': {
    title: 'Airport Transfer',
    icon: <FaPlane />,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&h=400&fit=crop',
    description: 'Never miss a flight with Shreenath Krupa Cabs airport transfer service. We provide timely pickup and drop to Mumbai and Pune airports with flight tracking and professional chauffeurs.',
    features: [
      'Flight tracking for timely pickup',
      'Available for all airport terminals',
      'Meet & greet service at arrivals',
      'Free waiting time up to 45 minutes',
      'Early morning & late night availability',
      'Luggage-friendly spacious vehicles',
      'Fixed price - no surge during peak hours',
      'Complimentary water & newspaper'
    ],
    packages: [
      { name: 'Pune Airport Transfer', desc: 'Pickup/drop to Pune Airport from anywhere in Pune city.' },
      { name: 'Mumbai Airport Transfer', desc: 'Pune to/from Mumbai Airport (Domestic & International).' },
      { name: 'Corporate Airport Service', desc: 'Dedicated airport cab for business travelers with priority.' },
      { name: 'Group Airport Transfer', desc: 'Tempo Traveller/Mini Bus for group pickups and drops.' }
    ]
  },
  'tour-packages': {
    title: 'Tour Packages',
    icon: <FaMapMarkedAlt />,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop',
    description: 'Explore India with our customized tour packages. From spiritual pilgrimages to romantic honeymoons, family vacations to adventure trips - Shreenath Krupa Cabs has the perfect package for every traveler.',
    features: [
      'Customizable itinerary as per your needs',
      'All-inclusive packages with accommodation',
      'Experienced drivers who double as guides',
      'Pilgrimage, honeymoon & family packages',
      'Hill station and beach destination tours',
      'Group discounts for large parties',
      'Flexible duration - 2 days to 2 weeks',
      'Hotel booking assistance included'
    ],
    packages: [
      { name: 'Shirdi-Shani Shingnapur', desc: '2-day spiritual tour covering Shirdi & Shani Shingnapur temples.' },
      { name: 'Mahabaleshwar-Panchgani', desc: '3-day hill station getaway with sightseeing and strawberry farms.' },
      { name: 'Goa Beach Package', desc: '4-day Goa tour covering North & South Goa beaches and attractions.' },
      { name: 'Konkan Coastal Tour', desc: '5-day scenic coastal tour covering Ratnagiri, Ganpatipule & more.' }
    ]
  },
  'corporate-travel': {
    title: 'Corporate Travel',
    icon: <FaUsers />,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=400&fit=crop',
    description: 'Streamline your corporate travel with Shreenath Krupa Cabs. We offer dedicated employee transport, business trip management, and event logistics with monthly billing and priority service.',
    features: [
      'Dedicated account manager',
      'Monthly billing with GST invoices',
      'Employee pickup & drop service',
      'Priority booking for urgent travel',
      'Fleet of premium business vehicles',
      'MIS reports for travel tracking',
      'Flexible contract terms',
      '24/7 customer support for corporates'
    ],
    packages: [
      { name: 'Employee Transport', desc: 'Daily office commute for employees with fixed routes and timing.' },
      { name: 'Business Outstation', desc: 'Client meetings, site visits, and inter-city business travel.' },
      { name: 'Event & Conference', desc: 'Airport pickups, hotel transfers for corporate events.' },
      { name: 'Executive Car Service', desc: 'Premium luxury cars with professional chauffeurs for leadership.' }
    ]
  },
  'event-wedding': {
    title: 'Event & Wedding Cars',
    icon: <FaCalendarAlt />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop',
    description: 'Make your special occasions memorable with our event and wedding car services. From decorated wedding cars to fleet arrangements for guests, we handle all your event transportation needs.',
    features: [
      'Decorated wedding cars available',
      'Fleet arrangements for baraat & guests',
      'Luxury vehicles for VIP guests',
      'Multiple vehicle coordination',
      'On-time guarantee for events',
      'Backup vehicles on standby',
      'Event-day coordination support',
      'Affordable packages for all budgets'
    ],
    packages: [
      { name: 'Wedding Car', desc: 'Decorated luxury car for bride & groom with ribbons and flowers.' },
      { name: 'Guest Transport', desc: 'Multiple cabs for wedding guests - airport & hotel transfers.' },
      { name: 'Baraat Arrangement', desc: 'Special vehicles and coordination for baraat procession.' },
      { name: 'Full Event Package', desc: 'Complete transportation solution for multi-day wedding events.' }
    ]
  }
}

function ServiceDetail() {
  const { serviceId } = useParams()
  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="route-detail-page">
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Go Back Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="route-detail-page">
      {/* Hero */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(255, 107, 0, 0.6)), url(${service.image})` }}>
        <div className="container">
          <Link to="/" className="back-btn"><FaArrowLeft /> Back to Home</Link>
          <h1>{service.title}</h1>
          <p className="route-hero-subtitle">Shreenath Krupa Cabs - Professional Travel Services</p>
        </div>
      </section>

      {/* Quick Booking Strip */}
      <section className="quick-booking-strip">
        <div className="container">
          <div className="strip-content">
            <p>Book our <strong>{service.title}</strong> now!</p>
            <div className="strip-buttons">
              <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call Now</a>
              <a href={`https://wa.me/917796003200?text=Hi, I am interested in your ${service.title}. Please share details.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="route-about">
        <div className="container">
          <div className="route-about-grid">
            <div className="route-about-content">
              <h2>{service.title}</h2>
              <p className="route-description">{service.description}</p>

              <h3>Key Features</h3>
              <ul className="route-highlights">
                {service.features.map((item, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {item}</li>
                ))}
              </ul>

              <h3 style={{ marginTop: '40px' }}>Our Packages</h3>
              <div className="service-packages">
                {service.packages.map((pkg, i) => (
                  <div className="service-package-card" key={i}>
                    <h4>{pkg.name}</h4>
                    <p>{pkg.desc}</p>
                    <a href="tel:+918485800099" className="btn-book-sm">Enquire Now</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="route-sidebar">
              <div className="sidebar-booking-form">
                <h3>Get Free Quote</h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const name = formData.get('name')
                  const phone = formData.get('phone')
                  const msg = `Service Enquiry:%0AService: ${service.title}%0AName: ${name}%0APhone: ${phone}`
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
                    <textarea name="message" placeholder="Tell us your requirement..." rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Get Quote on WhatsApp</button>
                </form>
              </div>

              <div className="sidebar-contact">
                <h4>Need Help?</h4>
                <p>Call us 24/7 for instant booking</p>
                <a href="tel:+918485800099" className="contact-number"><FaPhoneAlt /> +91 84858 00099</a>
                <a href="tel:+917796003200" className="contact-number"><FaPhoneAlt /> +91 77960 03200</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="route-cta">
        <div className="container">
          <h2>Interested in Our {service.title}?</h2>
          <p>Contact us now for the best rates and packages!</p>
          <div className="route-cta-buttons">
            <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call Now</a>
            <a href={`https://wa.me/917796003200?text=Hi, I want to know more about ${service.title}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><FaWhatsapp /> WhatsApp Us</a>
            <Link to="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
