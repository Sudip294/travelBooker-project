import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  // theme toggle 
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid container-lg my-0">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-airplane-fill me-2"></i>
          TravelBooker
        </Link>

        <div className="d-flex ms-auto align-items-center">

          {/* Theme Toggle Button for mobile - placed before hamburger */}
          <div className="d-lg-none me-3">
            <button
              className="btn btn-outline-secondary border-0 p-2"
              style={{ background: 'none', transition: 'color 0.3s,transform 0.3s', transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)' }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle dark/light mode"
            >
              <i
                className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}
                style={{
                  fontSize: '1.5rem',
                  color: theme === 'dark' ? '#f8f9fa' : '#ffc107',
                  transition: 'transform 0.3s, color 0.3s',
                  transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
              ></i>
            </button>
          </div>

          {/* Custom hamburger icon */}
          <button
            className={`navbar-toggler ms-auto ${isCollapsed ? '' : 'collapsed'}`}
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-expanded={!isCollapsed}
            aria-controls="navbarNav"
          >
            <div className={`bar bar1 ${isCollapsed ? '' : 'rotate-bar1'}`}></div>
            <div className={`bar bar2 ${isCollapsed ? '' : 'hidden'}`}></div>
            <div className={`bar bar3 ${isCollapsed ? '' : 'rotate-bar3'}`}></div>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav" style={{ transition: 'all 0.3s ease' }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                to="/"
                onClick={() => setIsCollapsed(true)}
              >
                <i className="bi bi-house-fill me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}
                to="/destinations"
                onClick={() => setIsCollapsed(true)}
              >
                <i className="bi bi-geo-alt-fill me-1"></i>
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/booking') ? 'active' : ''}`}
                to="/booking"
                onClick={() => setIsCollapsed(true)}
              >
                <i className="bi bi-calendar-check-fill me-1"></i>
                Book Now
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                to="/about"
                onClick={() => setIsCollapsed(true)}
              >
                <i className="bi bi-info-circle-fill me-1"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                to="/contact"
                onClick={() => setIsCollapsed(true)}
              >
                <i className="bi bi-envelope-fill me-1"></i>
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row align-items-center">
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = e.target.nextElementSibling;
                    dropdown.classList.toggle('show');
                  }}
                >
                  <i className="bi bi-person me-1"></i>
                  {user.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/dashboard"
                      onClick={() => setIsCollapsed(true)}
                    >
                      <i className="bi bi-person-vcard me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  {user.role === 'admin' && (
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/admin"
                        onClick={() => setIsCollapsed(true)}
                      >
                        <i className="bi bi-person-gear me-2"></i>
                        Admin Panel
                      </Link>
                    </li>
                  )}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleLogout();
                        setIsCollapsed(true);
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item d-flex align-items-center">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={() => setIsCollapsed(true)}
                  >
                    <i className="bi bi-box-arrow-in-right me-1"></i>
                    Login
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <Link
                    className="btn btn-primary-custom btn-sm ms-2"
                    to="/signup"
                    onClick={() => setIsCollapsed(true)}
                  >
                    <i className="bi bi-person-plus-fill me-1"></i>
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Theme Toggle Button */}
            <li className="nav-item d-none d-lg-flex align-items-center ms-2">
              <button
                className="btn btn-outline-secondary border-0 p-2"
                style={{ background: 'none', transition: 'color 0.3s,transform 0.3s', transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)' }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle dark/light mode"
              >
                <i
                  className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}
                  style={{
                    fontSize: '1.5rem',
                    color: theme === 'dark' ? '#f8f9fa' : '#ffc107',
                    transition: 'transform 0.3s, color 0.3s',
                  }}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .navbar-toggler {
            background: none;
            border: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 22px;
          }

          .navbar-toggler:focus {
            outline: none; /* Remove the outline when clicked */
            box-shadow: none; /* Remove box-shadow on focus */
          }
               
          .bar {
            background-color: black;
            height: 3px;
            width: 100%;
            transition: all 0.3s ease;
          }

          .rotate-bar1 {
            transform: rotate(45deg) translateY(13px);
          }

          .rotate-bar3 {
            transform: rotate(-45deg) translateY(-13px);
          }

          .hidden {
            opacity: 0;
            visibility: hidden;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
