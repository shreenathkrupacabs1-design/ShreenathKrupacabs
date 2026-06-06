import React from 'react'

function Counter() {
  const stats = [
    { number: '15000+', label: 'Happy Customers' },
    { number: '50+', label: 'Cars in Fleet' },
    { number: '100+', label: 'Routes Covered' },
    { number: '10+', label: 'Years Experience' }
  ]

  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {stats.map((stat, index) => (
            <div className="counter-item" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
