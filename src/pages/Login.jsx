import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

   const [showPassword, setShowPassword] = useState(false)

  const from = location.state?.from?.pathname || '/'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields!')
      return
    }

    setLoading(true)

    try {
      await login(formData.email, formData.password)
      toast.success('Welcome back!')
      navigate(from, { replace: true })
    } catch (error) {
      toast.error('Invalid email or password!')
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
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Welcome Back
                </h3>
                <p className="mb-0 mt-2 opacity-75">Sign in to your account</p>
              </div>
              
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  
                  <div className="mb-4">
                    <div className="form-floating  position-relative">
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
                  
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
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
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>
                </form>
                
                <hr className="my-4" />
                
                <div className="text-center">
                  <p className="text-muted mb-3">Demo Accounts:</p>
                  <div className="small">
                    <p className="mb-1"><strong>User:</strong> user@demo.com / password</p>
                    <p className="mb-0"><strong>Admin:</strong> admin@travel.com / password</p>
                  </div>
                </div>
              </div>
              
              <div className="card-footer text-center py-3">
                <p className="text-muted mb-0">
                  Don't have an account? 
                  <Link to="/signup" className="text-decoration-none ms-1">
                    Sign up here
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

export default Login