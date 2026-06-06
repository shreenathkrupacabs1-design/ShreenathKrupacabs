import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import HomePage from './pages/HomePage'
import RouteDetail from './components/RouteDetail'
import ServiceDetail from './pages/ServiceDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import GalleryDetail from './pages/GalleryDetail'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/route/:routeId" element={<RouteDetail />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery/:galleryId" element={<GalleryDetail />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  )
}

export default App
