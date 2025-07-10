import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/mockData'
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('all')
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Get unique locations for filter
  const locations = [...new Set(destinations.map(dest => dest.location))]

  // Filter and sort destinations
  const filteredDestinations = destinations
    .filter(dest => {
      const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterBy === 'all' || dest.location === filterBy
      return matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.title.localeCompare(b.title)
      }
    })

  // Skeleton card component
  const SkeletonCard = () => (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 border-0 shadow-lg card-hover slide-up" style={{ animationDelay: '0s' }}>
        <div className="position-relative">
          <div className="bg-secondary bg-opacity-25" style={{ height: '250px', width: '100%' }}></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-secondary fs-6" style={{ width: '40px', height: '24px' }}></span>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3">
            <span className="badge bg-secondary bg-opacity-50" style={{ width: '60px', height: '24px' }}></span>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="text-muted mb-2 placeholder-glow">
            <span className="placeholder col-4"></span>
          </p>
          <p className="card-text flex-grow-1 placeholder-glow">
            <span className="placeholder col-7"></span>
          </p>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="h4 text-primary mb-0 placeholder-glow">
                  <span className="placeholder col-3"></span>
                </span>
                <small className="text-muted placeholder-glow">
                  <span className="placeholder col-2"></span>
                </small>
              </div>
              <small className="text-muted placeholder-glow">
                <span className="placeholder col-2"></span>
              </small>
            </div>
            <div className="d-grid gap-2">
              <span className="btn btn-primary-custom btn-custom disabled placeholder col-6"></span>
            </div>
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
        onClick={handleCardClick}>
        <div
          className="card h-100 border-0 shadow-lg card-hover slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
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

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{destination.title}</h5>
            <p className="text-muted mb-2">
              <i className="bi bi-geo-alt me-1"></i>
              {destination.location}
            </p>
            <p className="card-text flex-grow-1">{destination.description}</p>

            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="h4 text-primary mb-0">${destination.price}</span>
                  <small className="text-muted"> / person</small>
                </div>
                <small className="text-muted">{destination.duration}</small>
              </div>

              <div className="d-grid gap-2">
                <Link
                  to="/booking"
                  state={{ selectedDestination: destination.title }}
                  className="btn btn-primary-custom btn-custom"
                  onClick={e => e.stopPropagation()}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Explore Destinations</h1>
            <p className="lead text-muted">
              Discover amazing places around the world and plan your next adventure
            </p>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control destinations-search"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <select
              className="form-select"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="col-lg-4 col-md-12 mb-3">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="row mb-4">
          <div className="col-12">
            <p className="text-muted">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="row g-4">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="text-muted">
                <i className="bi bi-search fs-1 mb-3 d-block"></i>
                <h4>No destinations found</h4>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {filteredDestinations.length > 0 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="bg-light rounded p-5">
                <h3 className="mb-3">Can't find what you're looking for?</h3>
                <p className="text-muted mb-4">
                  Contact our travel experts to create a custom itinerary just for you
                </p>
                <Link to="/contact" className="btn btn-primary-custom btn-lg btn-custom">
                  <i className="bi bi-envelope me-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Destinations
