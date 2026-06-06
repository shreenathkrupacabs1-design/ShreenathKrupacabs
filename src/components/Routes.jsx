import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaRoad, FaClock, FaArrowRight } from 'react-icons/fa'
import { routesData } from '../data/routesData'

function Routes() {
  return (
    <section className="routes" id="routes">
      <div className="container">
        <div className="section-title">
          <h2>Popular Routes</h2>
          <p>Most booked cab routes - Click to view details and book your ride</p>
        </div>
        <div className="routes-grid">
          {routesData.map((route, index) => (
            <Link to={`/route/${route.id}`} className="route-card" key={index}>
              <div className="route-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="route-info">
                <h4>{route.from} → {route.to}</h4>
                <p><FaRoad className="route-meta-icon" /> {route.distance} &nbsp;|&nbsp; <FaClock className="route-meta-icon" /> {route.duration}</p>
              </div>
              <div className="route-arrow">
                <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Routes
