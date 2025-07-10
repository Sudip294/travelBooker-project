import { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { topDestinations } from '../data/mockData'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Skeleton card component for top destinations
  const SkeletonCard = () => (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 border-0 shadow-lg card-hover" style={{ animationDelay: '0s' }}>
        <div className="position-relative" style={{ height: '250px' }}>
          <div className="bg-secondary bg-opacity-25 w-100 h-100"></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-secondary fs-6" style={{ width: '40px', height: '24px' }}></span>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3">
            <span className="badge bg-secondary bg-opacity-50" style={{ width: '60px', height: '24px' }}></span>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="text-muted mb-2 placeholder-glow">
            <span className="placeholder col-4"></span>
          </p>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="h5 text-primary mb-0 placeholder-glow">
                <span className="placeholder col-3"></span>
              </span>
              <small className="text-muted placeholder-glow">
                <span className="placeholder col-2"></span>
              </small>
            </div>
            <span className="btn btn-primary-custom btn-custom disabled placeholder col-4"></span>
          </div>
        </div>
      </div>
    </div>
  )

  // Destination card with image loading skeleton
  const DestinationCard = ({ destination, index }) => {
    const [imgLoaded, setImgLoaded] = useState(false)
    const [imgError, setImgError] = useState(false)

    // Navigate to destination details page
    const navigate = useNavigate();
    const handleCardClick = () => {
      navigate(`/destination/${destination.id}`);
    };

    return (
      <div key={destination.id} className="col-lg-4 col-md-6" style={{ cursor: 'pointer' }}
        onClick={handleCardClick} >
        <div
          className="card h-100 border-0 shadow-lg card-hover"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="position-relative" style={{ height: '250px' }}>
            {!imgLoaded && (
              <div className="bg-secondary bg-opacity-25 w-100 h-100 position-absolute top-0 start-0"></div>
            )}
            {!imgError ? (
              <img
                src={destination.image}
                className="card-img-top destination-img"
                alt={destination.title}
                style={{ height: '250px', objectFit: 'cover', display: imgLoaded ? 'block' : 'none' }}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-secondary bg-opacity-50 position-absolute top-0 start-0">
                <i className="bi bi-image fs-1 text-muted"></i>
              </div>
            )}
            <div className="position-absolute top-0 end-0 m-3">
              <span className="badge bg-primary-custom fs-6">
                <i className="bi bi-star-fill me-1"></i>
                {destination.rating}
              </span>
            </div>
            <div className="position-absolute bottom-0 start-0 m-3">
              <span className="badge bg-dark bg-opacity-75">
                {destination.duration}
              </span>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">{destination.title}</h5>
            <p className="text-muted mb-2">
              <i className="bi bi-geo-alt me-1"></i>
              {destination.location}
            </p>
            <p className="card-text">{destination.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h5 text-primary mb-0">${destination.price}</span>
                <small className="text-muted"> / person</small>
              </div>
              <Link
                to="/booking"
                state={{ selectedDestination: destination.title }}
                className="btn btn-primary-custom btn-custom"
                onClick={e => e.stopPropagation()}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="slide-up">Discover Your Next Adventure</h1>
            <p className="slide-up">
              Explore breathtaking destinations around the world with our curated travel experiences.
              Your journey to unforgettable memories starts here.
            </p>
            <div className="slide-up d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
              <Link to="/destinations" className="btn btn-primary-custom btn-lg  btn-custom">
                <i className="bi bi-compass me-2"></i>
                Explore Destinations
              </Link>
              <Link to="/booking" className="btn btn-outline-light btn-lg btn-custom">
                <i className="bi bi-calendar-check me-2"></i>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Why Choose TravelBooker?</h2>
              <p className="lead text-muted">We make your travel dreams come true with exceptional service and unforgettable experiences</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-globe fs-2" style={{ color: 'black' }}></i>
                  </div>
                  <h4 className="card-title">Global Destinations</h4>
                  <p className="card-text text-muted">
                    Access to over 1000+ destinations worldwide with carefully selected accommodations and experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check fs-2" style={{ color: 'black' }}></i>
                  </div>
                  <h4 className="card-title">Secure Booking</h4>
                  <p className="card-text text-muted">
                    Your bookings are protected with our secure payment system and comprehensive travel insurance options.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-headset fs-2" style={{ color: 'black' }}></i>
                  </div>
                  <h4 className="card-title">24/7 Support</h4>
                  <p className="card-text text-muted">
                    Our dedicated support team is available around the clock to assist you throughout your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Top Destinations</h2>
              <p className="lead text-muted">Discover our most popular travel destinations</p>
            </div>
          </div>

          <div className="row g-4">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              topDestinations.map((destination, index) => (
                <DestinationCard key={destination.id} destination={destination} index={index} />
              ))
            )}
          </div>

          <div className="text-center mt-5">
            <Link to="/destinations" className="btn btn-outline-primary btn-lg btn-custom">
              <i className="bi bi-arrow-right me-2"></i>
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary-custom text-black">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
              <p className="lead mb-4">
                Join thousands of satisfied travelers who have discovered amazing destinations with us.
                Your next adventure is just a click away!
              </p>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
              <Link to="/signup" className="btn btn-light btn-lg btn-custom">
                <i className="bi bi-person-plus me-2"></i>
                Sign Up Today
              </Link>
              <Link to="/contact" className="btn btn-light btn-lg btn-custom">
                <i className="bi bi-telephone me-2"></i>
                Contact Us
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
