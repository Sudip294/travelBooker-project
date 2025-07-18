import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const Signup = () => {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields!')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters!')
      return
    }

    setLoading(true)

    try {
      await signup(formData.name, formData.email, formData.password)
      toast.success('Account created successfully! Welcome aboard!')
      navigate('/')
    } catch (error) {
      toast.error('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary-custom text-black text-center py-4">
                <h3 className="mb-0">
                  <i className="bi bi-person-plus me-2"></i>
                  Join TravelBooker
                </h3>
                <p className="mb-0 mt-2 opacity-75">Create your account to start exploring</p>
              </div>

              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-floating position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="password">Password</label>
                       <button
                        type="button"
                        className="btn btn-sm bg-transparent border-0 shadow-none position-absolute top-50 end-0 translate-middle-y me-2"
                        style={{ zIndex: 2 }}
                        tabIndex={-1}
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-floating position-relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                      />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <button
                        type="button"
                        className="btn btn-sm bg-transparent border-0 shadow-none position-absolute top-50 end-0 translate-middle-y me-2"
                        style={{ zIndex: 2 }}
                        tabIndex={-1}
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the <Link to="/terms" className="text-decoration-none">Terms of Service</Link> and <Link to="/privacy" className="text-decoration-none">Privacy Policy</Link>
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
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="card-footer text-center py-3">
                <p className="text-muted mb-0">
                  Already have an account?
                  <Link to="/login" className="text-decoration-none ms-1">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup