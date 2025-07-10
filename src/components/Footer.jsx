import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">
              <i className="bi bi-airplane-fill me-2"></i>
              TravelBooker
            </h5>
            <p className="text-light">
              Your trusted partner for unforgettable travel experiences.
              Discover the world with our carefully curated destinations and
              exceptional service.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/" className="text-light fs-4" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/?lang=en" className="text-light fs-4" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en" className="text-light fs-4" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl" className="text-light fs-4" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/destinations" className="footer-link text-light text-decoration-none">
                  Destinations
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/booking" className="footer-link text-light text-decoration-none">
                  Book Now
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="footer-link text-light text-decoration-none">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className="footer-link text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="footer-link text-light text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="footer-link text-light text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="footer-link text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="text-light">
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Travel Street, Adventure City, AC 12345
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@travelbooker.com
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              &copy; {new Date().getFullYear()} TravelBooker. All rights reserved. | Designed by Sudip Bag
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0">
              Made with <i className="bi bi-heart-fill text-danger"></i> for travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer