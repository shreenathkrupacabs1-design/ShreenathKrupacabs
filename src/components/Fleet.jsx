import React from 'react'

function Fleet() {
  const base = import.meta.env.BASE_URL || '/'
  const cars = [    {
      name: 'Swift Dzire',
      type: 'Sedan - 4 Seater',
      image: `${base}images.png`,
      price: '₹11/km',
      description: 'AC, Comfortable, Best for 2-4 passengers. Ideal for city and short outstation trips.'
    },    {
      name: 'Toyota Etios',
      type: 'Sedan - 4 Seater',
      image: `${base}images1.jpeg`,
      price: '₹12/km',
      description: 'Spacious sedan with ample boot space. Perfect for airport transfers and outstation travel.'
    },    {
      name: 'Maruti Ertiga',
      type: 'SUV - 6 Seater',
      image: `${base}images2.jpeg`,
      price: '₹14/km',
      description: 'Comfortable SUV for family trips. 6+1 seating with AC and music system.'
    },{
      name: 'Toyota Innova',
      type: 'SUV - 7 Seater',
      image: `${base}images4.jpeg`,
      price: '₹16/km',
      description: 'Premium SUV with 7 seater capacity. Best for long distance and family outings.'
    },{
      name: 'Innova Crysta',
      type: 'Luxury - 7 Seater',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80',
      price: '₹19/km',
      description: 'Top-end luxury vehicle with premium comfort. Ideal for business and VIP travel.'
    },    {
      name: 'Tempo Traveller',
      type: '12-17 Seater',
      image: `${base}images3.jpeg`,
      price: '₹22/km',
      description: 'Perfect for group tours, pilgrimages, and corporate team outings. Push-back seats with AC.'
    }
  ]

  return (
    <section className="fleet" id="fleet">
      <div className="container">
        <div className="section-title">
          <h2>Our Fleet</h2>
          <p>Choose from our wide range of well-maintained vehicles for your comfort</p>
        </div>
        <div className="fleet-grid">
          {cars.map((car, index) => (
            <div className="fleet-card" key={index}>
              <img src={car.image} alt={car.name} />
              <div className="fleet-card-content">
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <span className="price">Starting {car.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
