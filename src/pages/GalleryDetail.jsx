import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const galleryData = {
  'road-trips': {
    title: 'Road Trips',
    subtitle: 'Experience the Freedom of the Open Road',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=500&fit=crop',
    description: 'There is nothing quite like a road trip to rejuvenate your spirit. With Shreenath Krupa Cabs, hit the highway in a comfortable AC vehicle with an experienced driver who knows every turn and stop along the way. From scenic Western Ghat routes to coastal drives, we make every road trip memorable.',
    content: 'Our road trip packages are designed for travelers who love the journey as much as the destination. Whether you are planning a spontaneous weekend getaway or a well-planned multi-day adventure, our fleet of sedans, SUVs, and tempo travellers ensures you travel in comfort and style. We cover popular road trip routes across Maharashtra, Goa, Karnataka, and beyond.',
    images: [
      { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop', caption: 'Open highway adventures' },
      { src: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=600&h=400&fit=crop', caption: 'Scenic mountain passes' },
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', caption: 'Through the Western Ghats' },
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Valley viewpoints' },
      { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop', caption: 'Coastal highway drives' },
      { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Beach road destinations' }
    ],
    highlights: [
      'Pune to Goa via scenic Amboli Ghat',
      'Mumbai to Lonavala expressway drive',
      'Pune to Mahabaleshwar hill route',
      'Mumbai-Nashik expressway trip',
      'Pune to Kolhapur highway cruise',
      'Multi-day Maharashtra road circuits'
    ]
  },
  'beach-tours': {
    title: 'Beach Tours',
    subtitle: 'Sun, Sand & Comfortable Rides',
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=500&fit=crop',
    description: 'Escape to India\'s most beautiful beaches with Shreenath Krupa Cabs. From the vibrant shores of Goa to the serene beaches of Konkan, we provide comfortable cab services to all major beach destinations. Relax in our AC vehicles while we handle the driving.',
    content: 'Our beach tour packages cover the entire western coastline. Whether you want the party beaches of North Goa, the peaceful coves of South Goa, or the untouched beauty of Konkan beaches like Tarkarli, Ganpatipule, and Dapoli - we get you there in comfort. Our drivers know the best routes, hidden beaches, and local spots that tourists rarely find.',
    images: [
      { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop', caption: 'Pristine beach getaways' },
      { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Goa beach vibes' },
      { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', caption: 'Sunset at the shore' },
      { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop', caption: 'Tropical paradise' },
      { src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&h=400&fit=crop', caption: 'Konkan coast beauty' },
      { src: 'https://images.unsplash.com/photo-1506953823645-5e86ed2e1cda?w=600&h=400&fit=crop', caption: 'Peaceful shorelines' }
    ],
    highlights: [
      'Pune to Goa beach tour (2-3 days)',
      'Konkan coast tour - Ganpatipule, Tarkarli',
      'Alibaug & Kashid day trips from Mumbai',
      'Dapoli & Harihareshwar getaways',
      'North Goa vs South Goa exploration',
      'Malvan scuba diving trip packages'
    ]
  },
  'temple-tours': {
    title: 'Temple Tours',
    subtitle: 'Spiritual Journeys with Divine Comfort',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=500&fit=crop',
    description: 'Embark on sacred pilgrimages with Shreenath Krupa Cabs. We specialize in temple tour packages covering the Jyotirlinga circuit, Ashtavinayak tour, Shirdi, Pandharpur, and more. Our drivers understand temple timings and ensure you reach on time for darshan.',
    content: 'India\'s rich spiritual heritage calls millions of devotees every year. Our temple tour services are designed with pilgrims in mind - early morning pickups, knowledge of darshan timings, comfortable vehicles for elderly passengers, and flexible schedules. Whether it is the Ashtavinayak circuit in Maharashtra, the Jyotirlinga trail, or single-temple visits to Shirdi or Trimbakeshwar, we make your spiritual journey comfortable and hassle-free.',
    images: [
      { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop', caption: 'Sacred temple visits' },
      { src: 'https://images.unsplash.com/photo-1564804955013-e02ce25e4a47?w=600&h=400&fit=crop', caption: 'Spiritual architecture' },
      { src: 'https://images.unsplash.com/photo-1591018653367-2a49e0962c7b?w=600&h=400&fit=crop', caption: 'Peaceful temple grounds' },
      { src: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&h=400&fit=crop', caption: 'Ancient Hindu temples' },
      { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop', caption: 'Devotional journeys' },
      { src: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&h=400&fit=crop', caption: 'Temple tour experiences' }
    ],
    highlights: [
      'Shirdi Sai Baba Temple tour',
      'Ashtavinayak complete circuit (2 days)',
      'Jyotirlinga Darshan - Trimbakeshwar, Bhimashankar',
      'Pandharpur Vithoba Temple visit',
      'Kolhapur Mahalakshmi & Tuljapur combined',
      'Akkalkot Swami Samarth pilgrimage'
    ]
  },
  'group-travel': {
    title: 'Group Travel',
    subtitle: 'Travel Together, Save Together',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=500&fit=crop',
    description: 'Planning a group outing? Shreenath Krupa Cabs offers spacious Tempo Travellers and Mini Buses perfect for family reunions, friend circles, office outings, and community pilgrimages. Travel together and enjoy every moment of the journey.',
    content: 'Group travel is more fun and more economical. Our fleet includes 12-seater, 17-seater, and 20-26 seater Tempo Travellers with push-back seats, AC, and music system. For larger groups, we have 35-50 seater buses available. All vehicles are well-maintained with experienced drivers who handle group dynamics professionally. We offer customized itineraries for every group size and budget.',
    images: [
      { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop', caption: 'Comfortable group transport' },
      { src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop', caption: 'Corporate team outings' },
      { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop', caption: 'Family group trips' },
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Adventure group tours' },
      { src: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=600&h=400&fit=crop', caption: 'Group hill station visits' },
      { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop', caption: 'Group beach getaways' }
    ],
    highlights: [
      '12-seater Tempo Traveller for small groups',
      '17-seater AC Tempo Traveller',
      '20-26 seater Mini Bus options',
      '35-50 seater bus for large groups',
      'Custom itinerary planning',
      'Corporate team building trip packages'
    ]
  },
  'hill-stations': {
    title: 'Hill Stations',
    subtitle: 'Cool Breezes & Scenic Views Await',
    heroImage: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=1200&h=500&fit=crop',
    description: 'Beat the heat with a trip to Maharashtra\'s beautiful hill stations. From the misty peaks of Mahabaleshwar to the waterfalls of Lonavala, Shreenath Krupa Cabs takes you to the most refreshing hill destinations with experienced hill-driving professionals.',
    content: 'Maharashtra is blessed with the Western Ghats offering numerous hill stations perfect for weekend getaways. Our drivers are specifically trained for hilly terrain driving, ensuring your safety on winding ghat roads. Whether it is the strawberry farms of Mahabaleshwar, the tiger point of Lonavala, the forts of Raigad, or the cool climate of Panchgani - we know every curve and viewpoint on these routes.',
    images: [
      { src: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=600&h=400&fit=crop', caption: 'Misty mountain mornings' },
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', caption: 'Western Ghat peaks' },
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Valley viewpoints' },
      { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop', caption: 'Scenic hill drives' },
      { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Lush green forests' },
      { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop', caption: 'Sunset from hilltop' }
    ],
    highlights: [
      'Lonavala & Khandala day trips',
      'Mahabaleshwar & Panchgani weekends',
      'Matheran car-free hill station visit',
      'Amboli in monsoon season',
      'Bhandardara lake & Wilson Dam',
      'Lavasa & Mulshi dam excursions'
    ]
  },
  'corporate-travel': {
    title: 'Corporate Travel',
    subtitle: 'Professional Travel Solutions for Business',
    heroImage: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=500&fit=crop',
    description: 'Shreenath Krupa Cabs provides premium corporate travel solutions for businesses of all sizes. From daily employee transport to client pickups, airport transfers, and corporate offsite planning - we deliver professionalism on wheels.',
    content: 'Our corporate cab services are trusted by numerous companies in Pune and Mumbai. We offer dedicated account managers, monthly billing, priority booking, and a fleet of premium vehicles suitable for business travel. Our drivers are trained in professional etiquette, punctuality, and confidentiality. Whether it is picking up a VIP client from the airport or arranging transport for a 200-person corporate event, we handle it with expertise.',
    images: [
      { src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop', caption: 'Premium corporate fleet' },
      { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop', caption: 'Executive sedans' },
      { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop', caption: 'Business SUVs' },
      { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop', caption: 'Team transport solutions' },
      { src: 'https://images.unsplash.com/photo-1606611013016-969c19ba29a6?w=600&h=400&fit=crop', caption: 'Luxury business travel' },
      { src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop', caption: 'Airport business transfers' }
    ],
    highlights: [
      'Daily employee pick-up & drop services',
      'Airport transfers for clients & executives',
      'Corporate offsite & team outing transport',
      'Monthly billing with GST invoices',
      'Dedicated account manager',
      'Priority booking & 24/7 availability'
    ]
  }
}

function GalleryDetail() {
  const { galleryId } = useParams()
  const gallery = galleryData[galleryId]

  if (!gallery) {
    return (
      <div className="route-detail-page">
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h2>Page Not Found</h2>
          <p>The gallery page you are looking for does not exist.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Go Back Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="route-detail-page">
      {/* Hero Banner */}
      <section className="route-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(255, 107, 0, 0.6)), url(${gallery.heroImage})` }}>
        <div className="container">
          <Link to="/" className="back-btn"><FaArrowLeft /> Back to Home</Link>
          <h1>{gallery.title}</h1>
          <p className="route-hero-subtitle">{gallery.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="gallery-detail-content">
        <div className="container">
          <div className="gallery-detail-grid">
            <div className="gallery-detail-text">
              <h2>{gallery.title} with Shreenath Krupa Cabs</h2>
              <p className="gallery-detail-desc">{gallery.description}</p>
              <p className="gallery-detail-body">{gallery.content}</p>

              <h3>Popular {gallery.title} We Offer</h3>
              <ul className="gallery-highlights-list">
                {gallery.highlights.map((item, index) => (
                  <li key={index}><FaMapMarkerAlt className="highlight-icon" /> {item}</li>
                ))}
              </ul>

              <div className="gallery-cta-buttons">
                <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call to Book</a>
                <a href="https://wa.me/917796003200?text=Hi%2C%20I%20am%20interested%20in%20your%20travel%20services" target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><FaWhatsapp /> WhatsApp Us</a>
                <Link to="/#booking" className="btn-secondary">Book Online</Link>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="gallery-images-section">
            <h3>Photo Gallery - {gallery.title}</h3>
            <div className="gallery-images-grid">
              {gallery.images.map((img, index) => (
                <div className="gallery-image-card" key={index}>
                  <img src={img.src} alt={img.caption} />
                  <p>{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="route-cta">
        <div className="container">
          <h2>Ready to Plan Your {gallery.title}?</h2>
          <p>Contact Shreenath Krupa Cabs for the best packages and rates!</p>
          <div className="route-cta-buttons">
            <a href="tel:+918485800099" className="btn-primary"><FaPhoneAlt /> Call Now</a>
            <Link to="/#booking" className="btn-secondary">Book Online</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryDetail
