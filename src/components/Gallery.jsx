import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  const galleryItems = [
    {
      id: 'road-trips',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=350&fit=crop',
      title: 'Road Trips'
    },
    {
      id: 'beach-tours',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&h=350&fit=crop',
      title: 'Beach Tours'
    },
    {
      id: 'temple-tours',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&h=350&fit=crop',
      title: 'Temple Tours'
    },
    {
      id: 'group-travel',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=350&fit=crop',
      title: 'Group Travel'
    },
    {
      id: 'hill-stations',
      image: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=500&h=350&fit=crop',
      title: 'Hill Stations'
    },
    {
      id: 'corporate-travel',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&h=350&fit=crop',
      title: 'Corporate Travel'
    }
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Travel Gallery</h2>
          <p>Explore moments from our happy customers' journeys across India</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <Link to={`/gallery/${item.id}`} className="gallery-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h4>{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
