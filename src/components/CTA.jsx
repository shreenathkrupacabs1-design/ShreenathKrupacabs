import React from 'react'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Book Your Next Trip?</h2>
        <p>Get the best deals on cab bookings. Call us now or book online instantly!</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+918485800099">
            <button className="btn-white">📞 Call Now - +91 84858 00099</button>
          </a>
          <a href="#booking">
            <button className="btn-white" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
              Book Online
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
