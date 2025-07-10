import { useLocation } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

const Booking = () => {
  const location = useLocation()
  const selectedDestination = location.state?.selectedDestination || null

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">Book Your Trip</h1>
              <p className="lead text-muted">
                Fill out the form below to secure your spot on an unforgettable journey
              </p>
            </div>
            
            <BookingForm selectedDestination={selectedDestination} />
            
            <div className="mt-5">
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="bg-light rounded shadow-lg p-4 h-100">
                    <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                    <h5>Secure Booking</h5>
                    <p className="text-muted mb-0">Your information is protected with SSL encryption</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="bg-light rounded shadow-lg p-4 h-100">
                    <i className="bi bi-calendar-check text-primary fs-1 mb-3"></i>
                    <h5>Instant Confirmation</h5>
                    <p className="text-muted mb-0">Receive booking confirmation immediately</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="bg-light rounded shadow-lg p-4 h-100">
                    <i className="bi bi-headset text-primary fs-1 mb-3"></i>
                    <h5>24/7 Support</h5>
                    <p className="text-muted mb-0">Get help whenever you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking