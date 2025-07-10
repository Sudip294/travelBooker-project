import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields!')
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <p className="lead text-muted">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 mb-5">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary-custom text-white">
                <h4 className="mb-0 text-black">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Send us a Message
                </h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name *</label>
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
                          placeholder="your@email.com"
                          required
                        />
                        <label htmlFor="email">Email Address *</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-floating">
                      <select
                        className="form-select destination-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Support</option>
                        <option value="destinations">Destination Information</option>
                        <option value="technical">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                      <label htmlFor="subject">Subject *</label>
                    </div>
                  </div>

                  <div className="mb-4 position-relative custom-floating-label">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{ height: '150px' }}
                      placeholder=" " // <-- single space for floating label CSS
                      required
                    ></textarea>
                    <label htmlFor="message" className={formData.message ? 'active' : ''}>
                      Your Message *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-custom btn-lg w-100 btn-custom"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading-spinner me-2"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">
                  <i className="bi bi-info-circle me-2"></i>
                  Contact Information
                </h5>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Address</h6>
                      <p className="text-muted mb-0">123 Travel Street<br />Adventure City, AC 12345</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">info@travelbooker.com</p>
                    </div>
                  </div>
                </div>

                <h6 className="fw-bold mb-3">Follow Us</h6>
                <div className="d-flex gap-2">
                  <a href="https://www.facebook.com/" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://x.com/?lang=en" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://www.instagram.com/?hl=en" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">
                  <i className="bi bi-clock me-2"></i>
                  Business Hours
                </h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Monday - Friday</span>
                  <span className="fw-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Saturday</span>
                  <span className="fw-bold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Sunday</span>
                  <span className="fw-bold">Closed</span>
                </div>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  <small>Emergency support available 24/7 for active bookings</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">How do I cancel my booking?</h5>
                    <p className="text-muted">
                      You can cancel your booking through your dashboard or by contacting our support team.
                      Cancellation policies vary by destination and booking type.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">What payment methods do you accept?</h5>
                    <p className="text-muted">
                      We accept all major credit cards, PayPal, and bank transfers.
                      Payment is processed securely through our encrypted payment system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Do you offer travel insurance?</h5>
                    <p className="text-muted">
                      Yes, we partner with leading insurance providers to offer comprehensive
                      travel insurance options for all our bookings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Can I modify my booking?</h5>
                    <p className="text-muted">
                      Most bookings can be modified subject to availability and terms.
                      Contact us as soon as possible to discuss your options.
                    </p>
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

export default Contact