import React from 'react'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import Routes from '../components/Routes'
import WhyUs from '../components/WhyUs'
import Counter from '../components/Counter'
import Testimonials from '../components/Testimonials'
import CallbackForm from '../components/CallbackForm'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

function HomePage() {
  return (
    <>
      <Hero />
      <BookingForm />
      <Services />
      <Fleet />
      <Routes />
      <WhyUs />
      <Counter />
      <Testimonials />
      <CallbackForm />
      <Gallery />
      <CTA />
    </>
  )
}

export default HomePage
