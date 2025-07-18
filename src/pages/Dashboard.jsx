import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'

const Dashboard = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center py-5">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Always read from localStorage for up-to-date booking status
  const allBookings = JSON.parse(localStorage.getItem('travelBookings')) || []
  const userBookings = allBookings.filter(b => b.userEmail === user.email)

  const handleDeleteBooking = (bookingId) => {
    Swal.fire({
      title: 'Cancel Booking?',
      text: 'Are you sure you want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'Back',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBookings = allBookings.filter(b => b.id !== bookingId)
        localStorage.setItem('travelBookings', JSON.stringify(updatedBookings))
        toast.success('Booking cancelled successfully!')
        setTimeout(() => window.location.reload(), 800)
      }
    })
  }

  const totalSpent = userBookings.reduce((sum, booking) => sum + booking.totalPrice, 0)

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-5 fw-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted">Manage your bookings and profile information</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-calendar-check fs-1"></i>
              </div>
              <h3 className="fw-bold">{userBookings.length}</h3>
              <p className="text-muted mb-0">Total Bookings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-success mb-3">
                <i className="bi bi-currency-dollar fs-1"></i>
              </div>
              <h3 className="fw-bold">${totalSpent.toLocaleString()}</h3>
              <p className="text-muted mb-0">Total Spent</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-info mb-3">
                <i className="bi bi-geo-alt fs-1"></i>
              </div>
              <h3 className="fw-bold">{new Set(userBookings.map(b => b.destination)).size}</h3>
              <p className="text-muted mb-0">Destinations Visited</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-warning mb-3">
                <i className="bi bi-star fs-1"></i>
              </div>
              <h3 className="fw-bold">4.8</h3>
              <p className="text-muted mb-0">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Profile Information */}
          <div className="col-lg-4 mb-4">
            <div className="dashboard-card card">
              <div className="card-header bg-primary-custom text-white">
                <h5 className="mb-0">
                  <i className="bi bi-person-circle me-2"></i>
                  Profile Information
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center mb-4">
                  <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-person fs-1"></i>
                  </div>
                  <h5 className="fw-bold">{user.name}</h5>
                  <p className="text-muted">{user.email}</p>
                </div>
                <div className="border-top pt-3">
                  <div className="row text-center">
                    <div className="col-6">
                      <small className="text-muted">Member Since</small>
                      <div className="fw-bold">{new Date(user.joinDate).toLocaleDateString()}</div>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">Status</small>
                      <div className="fw-bold text-success">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="col-lg-8">
            <div className="dashboard-card card">
              <div className="card-header bg-primary-custom text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-calendar-check me-2"></i>
                  Your Bookings
                </h5>
                <span className="badge bookno bg-light text-dark">{userBookings.length}</span>
              </div>
              <div className="card-body">
                {userBookings.length > 0 ? (
                  <div className="table-responsive" style={{ scrollbarWidth: 'thin' }}>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Destination</th>
                          <th>Date</th>
                          <th>Travelers</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userBookings.map(booking => (
                          <tr key={booking.id}>
                            <td>
                              <div className="fw-bold">{booking.destination}</div>
                              <small className="text-muted">Booking #{booking.id}</small>
                            </td>
                            <td>
                              <div>{new Date(booking.checkIn).toLocaleDateString()}</div>
                              <small className="text-muted">to {new Date(booking.checkOut).toLocaleDateString()}</small>
                            </td>
                            <td>{booking.travelers}</td>
                            <td className="fw-bold">${booking.totalPrice.toLocaleString()}</td>
                            <td>
                              <span className={`badge ${booking.status === 'confirmed'
                                ? 'bg-success'
                                : booking.status === 'pending'
                                  ? 'bg-warning'
                                  : 'bg-danger'
                                }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td>
                              <button
                                className="btn btn-link btn-sm text-danger ms-2"
                                title="Cancel Booking"
                                onClick={() => handleDeleteBooking(booking.id)}
                                style={{ verticalAlign: 'middle'}}
                              >
                              <i className="bi bi-trash-fill"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <i className="bi bi-calendar-x text-muted fs-1 mb-3"></i>
                    <h5>No bookings yet</h5>
                    <p className="text-muted">Start planning your next adventure!</p>
                    <a href="/destinations" className="btn btn-primary-custom btn-custom">
                      <i className="bi bi-compass me-2"></i>
                      Explore Destinations
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard