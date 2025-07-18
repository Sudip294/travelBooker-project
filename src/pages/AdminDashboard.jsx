import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { destinations } from '../data/mockData'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

// Chart.js imports
import { Bar } from 'react-chartjs-2'
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const AdminDashboard = () => {
  const { user, loading } = useAuth()
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)

  // Load bookings from localStorage
  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('travelBookings')) || []
    setBookings(allBookings)
  }, [])

  // Update bookings in localStorage and state
  const updateBookingStatus = (bookingId, status) => {
    const updatedBookings = bookings.map(b =>
      b.id === bookingId ? { ...b, status } : b
    )
    setBookings(updatedBookings)
    localStorage.setItem('travelBookings', JSON.stringify(updatedBookings))
  }

  // Quick Actions logic
  const handleAddDestination = () => {
    toast('Redirecting to Add Destination page...')
    // Implement navigation or modal here
  }

  const handleApprovePending = () => {
    const hasPending = bookings.some(b => b.status === 'pending')
    if (!hasPending) {
      toast('No pending bookings to approve.')
      return
    }
    const updated = bookings.map(b =>
      b.status === 'pending' ? { ...b, status: 'confirmed' } : b
    )
    setBookings(updated)
    localStorage.setItem('travelBookings', JSON.stringify(updated))
    toast.success('All pending bookings approved!')
  }

  const handleSendNewsletter = () => {
    toast.success('Newsletter sent to all users!')
  }

  const handleGenerateReport = () => {
    setShowReportModal(true)
  }

  if (loading) {
    return <div className="text-center py-5">Loading...</div>
  }

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0)
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length
  const pendingBookings = bookings.filter(b => b.status === 'pending').length

  // Chart data for report modal
  const statusCounts = ['confirmed', 'pending', 'cancelled'].map(status =>
    bookings.filter(b => b.status === status).length
  )
  const reportData = {
    labels: ['Confirmed', 'Pending', 'Cancelled'],
    datasets: [
      {
        label: 'Bookings',
        data: statusCounts,
        backgroundColor: ['#198754', '#ffc107', '#dc3545'],
      },
    ],
  }

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-5 fw-bold">Admin Dashboard</h1>
            <p className="text-muted">Manage bookings and destinations</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-calendar-check fs-1"></i>
              </div>
              <h3 className="fw-bold">{bookings.length}</h3>
              <p className="text-muted mb-0">Total Bookings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-success mb-3">
                <i className="bi bi-currency-dollar fs-1"></i>
              </div>
              <h3 className="fw-bold">${totalRevenue.toLocaleString()}</h3>
              <p className="text-muted mb-0">Total Revenue</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-info mb-3">
                <i className="bi bi-geo-alt fs-1"></i>
              </div>
              <h3 className="fw-bold">{destinations.length}</h3>
              <p className="text-muted mb-0">Active Destinations</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card card text-center p-4">
              <div className="text-warning mb-3">
                <i className="bi bi-clock fs-1"></i>
              </div>
              <h3 className="fw-bold">{pendingBookings}</h3>
              <p className="text-muted mb-0">Pending Bookings</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Recent Bookings */}
          <div className="col-lg-8 mb-4">
            <div className="dashboard-card card">
              <div className="card-header bg-primary-custom text-white">
                <h5 className="mb-0">
                  <i className="bi bi-list-check me-2"></i>
                  Recent Bookings
                </h5>
              </div>
              <div className="card-body">
                <div className="table-responsive" style={{ scrollbarWidth: 'thin' }}>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map(booking => (
                        <tr key={booking.id}>
                          <td>#{booking.id}</td>
                          <td>
                            <div className="fw-bold">{booking.travelerName}</div>
                            <small className="text-muted">{booking.email}</small>
                          </td>
                          <td>{booking.destination}</td>
                          <td>
                            <div>{new Date(booking.checkIn).toLocaleDateString()}</div>
                            <small className="text-muted">to {new Date(booking.checkOut).toLocaleDateString()}</small>
                          </td>
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
                            <div className="btn-group btn-group-sm gap-1">
                              <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                  setSelectedBooking(booking)
                                  setShowModal(true)
                                }}
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                              <button
                                className="btn btn-outline-success"
                                disabled={booking.status === 'confirmed'}
                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              >
                                <i className="bi bi-check"></i>
                              </button>
                              <button
                                className="btn btn-outline-danger"
                                disabled={booking.status === 'cancelled'}
                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              >
                                <i className="bi bi-x"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {bookings.length === 0 && (
                    <div className="text-center text-muted py-4">No bookings yet.</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions & System Status */}
          <div className="col-lg-4">
            <div className="dashboard-card card mb-4">
              <div className="card-header bg-primary-custom text-white">
                <h5 className="mb-0">
                  <i className="bi bi-lightning me-2"></i>
                  Quick Actions
                </h5>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary btn-custom" onClick={handleAddDestination}>
                    <i className="bi bi-plus-circle me-2"></i>
                    Add New Destination
                  </button>
                  <button className="btn btn-outline-success btn-custom" onClick={handleApprovePending}>
                    <i className="bi bi-check-all me-2"></i>
                    Approve Pending Bookings
                  </button>
                  <button className="btn btn-outline-info btn-custom" onClick={handleSendNewsletter}>
                    <i className="bi bi-envelope me-2"></i>
                    Send Newsletter
                  </button>
                  <button className="btn btn-outline-warning btn-custom" onClick={handleGenerateReport}>
                    <i className="bi bi-bar-chart me-2"></i>
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
            <div className="dashboard-card card">
              <div className="card-header bg-primary-custom text-white">
                <h5 className="mb-0">
                  <i className="bi bi-activity me-2"></i>
                  System Status
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Booking System</span>
                  <span className="badge bg-success">Online</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Payment Gateway</span>
                  <span className="badge bg-success">Online</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Email Service</span>
                  <span className="badge bg-success">Online</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Database</span>
                  <span className="badge bg-success">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Details Modal */}
        {showModal && selectedBooking && (
          <>
            <div
              className="modal fade show"
              style={{ display: 'block', zIndex: 1050 }}
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Booking Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                      aria-label="Close"
                      style={{ filter: 'invert(28%) sepia(99%) saturate(7496%) hue-rotate(357deg) brightness(97%) contrast(108%)' }}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Booking ID:</strong> #{selectedBooking.id}</p>
                    <p><strong>Name:</strong> {selectedBooking.travelerName}</p>
                    <p><strong>Email:</strong> {selectedBooking.email}</p>
                    <p><strong>Destination:</strong> {selectedBooking.destination}</p>
                    <p><strong>Check-in:</strong> {new Date(selectedBooking.checkIn).toLocaleDateString()}</p>
                    <p><strong>Check-out:</strong> {new Date(selectedBooking.checkOut).toLocaleDateString()}</p>
                    <p><strong>Travelers:</strong> {selectedBooking.travelers}</p>
                    <p><strong>Total Price:</strong> ${selectedBooking.totalPrice.toLocaleString()}</p>
                    <p><strong>Status:</strong> {selectedBooking.status}</p>
                    {selectedBooking.specialRequests && (
                      <p><strong>Special Requests:</strong> {selectedBooking.specialRequests}</p>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal backdrop */}
            <div
              className="modal-backdrop fade show"
              style={{ zIndex: 1040 }}
              onClick={() => setShowModal(false)}
            ></div>
          </>
        )}

        {/* Report Modal with Chart */}
        {showReportModal && (
          <>
            <div
              className="modal fade show"
              style={{ display: 'block', zIndex: 1060 }}
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Booking Report</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowReportModal(false)}
                      style={{ filter: 'invert(28%) sepia(99%) saturate(7496%) hue-rotate(357deg) brightness(97%) contrast(108%)' }}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Bar data={reportData} />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setShowReportModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-backdrop fade show"
              style={{ zIndex: 1050 }}
              onClick={() => setShowReportModal(false)}
            ></div>
          </>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard