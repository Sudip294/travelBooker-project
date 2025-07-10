import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { destinations } from '../data/mockData'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom' // Add this import

const BookingForm = ({ selectedDestination = null }) => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate() // Add this line
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    destination: selectedDestination || '',
    travelerName: user?.name || '',
    email: user?.email || '',
    phone: '',
    travelers: 1,
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculatePrice = () => {
    if (!formData.destination || !formData.checkIn || !formData.checkOut) return 0

    const destination = destinations.find(d => d.title === formData.destination)
    if (!destination) return 0

    const checkIn = new Date(formData.checkIn)
    const checkOut = new Date(formData.checkOut)
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))

    return destination.price * formData.travelers * Math.max(1, nights / 7)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Redirect to login if not logged in
    if (!user) {
      toast.error('Please login to confirm your booking.')
      navigate('/login')
      return
    }

    // Validation
    if (!formData.destination || !formData.travelerName || !formData.email ||
      !formData.phone || !formData.checkIn || !formData.checkOut) {
      toast.error('Please fill in all required fields!')
      return
    }

    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      toast.error('Check-out date must be after check-in date!')
      return
    }

    if (new Date(formData.checkIn) <= new Date()) {
      toast.error('Check-in date must be in the future!')
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      const newBooking = {
        id: Date.now(),
        travelerName: formData.travelerName,
        email: formData.email,
        destination: formData.destination,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        travelers: formData.travelers,
        totalPrice: totalPrice,
        status: 'pending', // <-- set to pending
        userEmail: user.email, // for filtering in user dashboard
        specialRequests: formData.specialRequests,
        // ...any other fields
      };

      // Save to localStorage (all bookings)
      const allBookings = JSON.parse(localStorage.getItem('travelBookings')) || [];
      allBookings.push(newBooking);
      localStorage.setItem('travelBookings', JSON.stringify(allBookings));

      // Optionally, update user's own bookings in context/localStorage
      const updatedUser = { ...user, bookings: [...(user.bookings || []), newBooking] };
      updateUser(updatedUser);

      // Update user bookings if logged in
      if (user) {
        const updatedUser = {
          ...user,
          bookings: [...(user.bookings || []), newBooking]
        }
        updateUser(updatedUser)
      }

      toast.success('Booking confirmed! Check your email for details.')

      // Reset form
      setFormData({
        destination: '',
        travelerName: user?.name || '',
        email: user?.email || '',
        phone: '',
        travelers: 1,
        checkIn: '',
        checkOut: '',
        specialRequests: ''
      })
    } catch (error) {
      toast.error('Booking failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const totalPrice = calculatePrice()

  return (
    <div className="card shadow-lg border-0">
      <div className="card-header bg-primary-custom text-white">
        <h4 className="mb-0 text-black">
          <i className="bi bi-calendar-check-fill me-2"></i>
          Book Your Adventure
        </h4>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-floating">
                <select
                  className="form-select destination-select"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose destination...</option>
                  {destinations.map(dest => (
                    <option key={dest.id} value={dest.title}>
                      {dest.title} - ${dest.price}
                    </option>
                  ))}
                </select>
                <label htmlFor="destination">Destination *</label>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                />
                <label htmlFor="travelers">Number of Travelers *</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="travelerName"
                  name="travelerName"
                  value={formData.travelerName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="travelerName">Full Name *</label>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email Address *</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Phone Number *</label>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <label htmlFor="checkIn">Check-in Date *</label>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
                <label htmlFor="checkOut">Check-out Date *</label>
              </div>
            </div>
          </div>

          <div className="mb-4 position-relative custom-floating-label">
            <textarea
              className="form-control"
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              style={{ height: '100px' }}
              placeholder=" " // <-- note: single space to trigger :placeholder-shown
            ></textarea>
            <label htmlFor="specialRequests" className={formData.specialRequests ? 'active' : ''}>
              Special Requests (Optional)
            </label>
          </div>

          {totalPrice > 0 && (
            <div className="alert alert-info d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-calculator me-2"></i>
                Estimated Total Price:
              </span>
              <strong className="fs-4">${totalPrice.toLocaleString()}</strong>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary-custom btn-lg w-100 btn-custom"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner me-2"></span>
                Processing Booking...
              </>
            ) : (
              <>
                <i className="bi bi-check-circle-fill me-2"></i>
                Confirm Booking
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingForm