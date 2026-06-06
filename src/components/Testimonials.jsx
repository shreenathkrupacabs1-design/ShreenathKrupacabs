import React from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Pune',
      text: 'Excellent service! Booked a cab from Pune to Mumbai and the driver was very professional. Clean car, on-time pickup. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      location: 'Mumbai',
      text: 'Used their airport transfer service multiple times. Always punctual and reliable. The booking process is very smooth and hassle-free.',
      rating: 5
    },
    {
      name: 'Amit Deshmukh',
      location: 'Nashik',
      text: 'We booked a tempo traveller for our family trip to Shirdi. Amazing experience! Driver was knowledgeable and the vehicle was well-maintained.',
      rating: 5
    },
    {
      name: 'Sneha Kulkarni',
      location: 'Pune',
      text: 'Best cab service in Pune! Affordable rates, no hidden charges, and the customer support is very responsive. Will book again for sure.',
      rating: 4
    },
    {
      name: 'Vikram Singh',
      location: 'Mumbai',
      text: 'Booked Innova Crysta for a corporate trip. Premium experience at reasonable rates. The team ensured everything was perfect.',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      location: 'Kolhapur',
      text: 'Family trip to Goa was made memorable by Shreenath Krupa Cabs. Comfortable journey, friendly driver, and great rates!',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from our valued customers who trust us for their travel needs</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p>"{item.text}"</p>
              <div className="author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
